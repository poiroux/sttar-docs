import React, {type ReactNode} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const MANUALS: {to: string; title: string; code: string; draft?: boolean}[] = [
  {to: '/advanced-designer/intro', title: 'Advanced Designer', code: 'STAD'},
  {to: '/planner/intro', title: 'Planner', code: 'STPL'},
  {to: '/batch-engine/intro', title: 'Batch Engine', code: 'STBE'},
  {to: '/cloud/intro', title: 'Cloud', code: 'CLOUD', draft: true},
];

export default function Home(): ReactNode {
  return (
    <Layout title="STTAR Documentation" description="STTAR product documentation (draft)">
      <main style={{maxWidth: 860, margin: '0 auto', padding: '3rem 1rem'}}>
        <h1>STTAR Documentation</h1>
        <p>
          Validation draft. Access to each manual is gated by license type; pick a
          mock license to simulate entitlement.
        </p>
        <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', margin: '2rem 0'}}>
          {MANUALS.map((m) => (
            <div
              key={m.code}
              style={{
                border: '1px solid var(--ifm-color-emphasis-300)',
                borderRadius: 8,
                padding: '1.25rem',
                minWidth: 220,
              }}>
              <h3 style={{marginTop: 0}}>
                {m.title}
                {m.draft && (
                  <span style={{marginLeft: 8, fontSize: '0.7rem', opacity: 0.6, fontWeight: 'normal'}}>
                    DRAFT
                  </span>
                )}
              </h3>
              <p style={{opacity: 0.7}}>License <code>{m.code}</code></p>
              <Link
                className={`button ${m.draft ? 'button--secondary' : 'button--primary'}`}
                to={m.to}>
                {m.draft ? 'Preview manual' : 'Open manual'}
              </Link>
            </div>
          ))}
        </div>
        <p>
          Mock license:&nbsp;
          <a href="/?lic=STAD">STAD</a> ·{' '}
          <a href="/?lic=STPL">STPL</a> ·{' '}
          <a href="/?lic=STBE">STBE</a> ·{' '}
          <a href="/?lic=CLOUD">CLOUD</a>
        </p>
      </main>
    </Layout>
  );
}
