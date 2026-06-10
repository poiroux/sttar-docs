import React, {useEffect, useState, type ReactNode} from 'react';
import Layout from '@theme/Layout';
import {useLocation} from '@docusaurus/router';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const STORAGE_KEY = 'sttar-docs-license';

export default function NoAccess(): ReactNode {
  const location = useLocation();
  const [lic, setLic] = useState<string | null>(null);
  const manual = new URLSearchParams(location.search).get('manual') ?? 'this manual';

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      setLic(window.localStorage.getItem(STORAGE_KEY));
    }
  }, []);

  return (
    <Layout title="No access" description="License does not entitle this manual">
      <main style={{maxWidth: 720, margin: '0 auto', padding: '3rem 1rem'}}>
        <h1>No access</h1>
        <p>
          Your current license{lic ? <> (<code>{lic}</code>)</> : ' (none set)'} does
          not entitle the <strong>{manual}</strong> manual.
        </p>
        <p>
          This is the draft access gate (UX only). Switch the mock license to try
          another entitlement:
        </p>
        <ul>
          <li><a href="/?lic=STAD">Set license STAD → Advanced Designer</a></li>
          <li><a href="/?lic=STPL">Set license STPL → Planner</a></li>
          <li><a href="/?lic=STBE">Set license STBE → Batch Engine</a></li>
          <li><a href="/?lic=CLOUD">Set license CLOUD → all manuals</a></li>
        </ul>
      </main>
    </Layout>
  );
}
