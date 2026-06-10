import React, {useEffect, type ReactNode} from 'react';
import {useLocation, useHistory} from '@docusaurus/router';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

/**
 * Access shell — swizzled Root, wraps the whole app and persists across
 * client-side navigation.
 *
 * DRAFT BEHAVIOUR (UX gate only — NOT real security):
 *   - reads a mock license token from `?lic=STAD` (then persists to
 *     localStorage), decodes the license type, and gates the manuals the
 *     license does not entitle by redirecting to /no-access.
 *
 * A client-side gate on a static bundle cannot enforce access: anyone can
 * fetch the hidden HTML/JSON directly. Real enforcement must live at the
 * host/edge (token-validated access before serving a manual's assets).
 *
 * TODO(prod): replace mock decode with the in-house signed-token broker from
 * RFC §6, and move enforcement to the edge (per-manual deploy behind an auth
 * proxy / signed-cookie edge auth).
 */

const STORAGE_KEY = 'sttar-docs-license';

// License code -> route base paths it entitles.
const ENTITLEMENTS: Record<string, string[]> = {
  STAD: ['advanced-designer'],
  STPL: ['planner'],
  STBE: ['batch-engine'],
  // Cloud mapping is TBD (RFC open point) — placeholder: full access.
  CLOUD: ['advanced-designer', 'planner', 'batch-engine'],
};

// Route base paths that are gated. Anything else (home, /no-access, /search) is open.
const GATED_BASES = ['advanced-designer', 'planner', 'batch-engine'];

function decodeLicense(raw: string | null): string[] {
  // TODO(prod): verify token signature via the in-house broker (RFC §6).
  if (!raw) return [];
  const code = raw.trim().toUpperCase();
  return ENTITLEMENTS[code] ?? [];
}

function readLicenseRaw(search: string): string | null {
  if (!ExecutionEnvironment.canUseDOM) return null;
  const fromQuery = new URLSearchParams(search).get('lic');
  if (fromQuery) {
    window.localStorage.setItem(STORAGE_KEY, fromQuery);
    return fromQuery;
  }
  return window.localStorage.getItem(STORAGE_KEY);
}

function gatedBaseOf(pathname: string): string | null {
  const seg = pathname.replace(/^\/+/, '').split('/')[0];
  return GATED_BASES.includes(seg) ? seg : null;
}

export default function Root({children}: {children: ReactNode}): ReactNode {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const base = gatedBaseOf(location.pathname);
    if (!base) return; // open route
    const entitled = decodeLicense(readLicenseRaw(location.search));
    if (!entitled.includes(base)) {
      history.replace(`/no-access?manual=${base}`);
    }
  }, [location.pathname, location.search, history]);

  return <>{children}</>;
}
