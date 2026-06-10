import React, {type ReactNode} from 'react';

type CalloutType = 'note' | 'warning' | 'tip';

const STYLES: Record<CalloutType, {border: string; bg: string; label: string}> = {
  note: {border: '#4a90d9', bg: 'rgba(74,144,217,0.1)', label: 'Note'},
  warning: {border: '#e0a800', bg: 'rgba(224,168,0,0.12)', label: 'Warning'},
  tip: {border: '#2eb872', bg: 'rgba(46,184,114,0.12)', label: 'Tip'},
};

export default function Callout({
  type = 'note',
  children,
}: {
  type?: CalloutType;
  children: ReactNode;
}): ReactNode {
  const s = STYLES[type];
  return (
    <div
      style={{
        borderLeft: `4px solid ${s.border}`,
        background: s.bg,
        padding: '0.75rem 1rem',
        borderRadius: 4,
        margin: '1rem 0',
      }}>
      <strong style={{color: s.border}}>{s.label}</strong>
      <div>{children}</div>
    </div>
  );
}
