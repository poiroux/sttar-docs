import React, {useEffect, useState, type ReactNode} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

interface Field {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

interface Schema {
  object: string;
  version: string;
  fields: Field[];
}

/**
 * Renders a data-model reference table from a JSON artifact in the static
 * bundle. Prototypes the RFC idea of schema-driven tables fed by a versioned
 * JSON file emitted by the STTAR build.
 */
export default function DataModelTable({source}: {source: string}): ReactNode {
  const url = useBaseUrl(source);
  const [schema, setSchema] = useState<Schema | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(url)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))))
      .then((data: Schema) => {
        if (!cancelled) setSchema(data);
      })
      .catch((e) => {
        if (!cancelled) setError(String(e));
      });
    return () => {
      cancelled = true;
    };
  }, [url]);

  if (error) return <p style={{color: 'crimson'}}>Failed to load schema: {error}</p>;
  if (!schema) return <p>Loading schema…</p>;

  return (
    <>
      <p>
        <code>{schema.object}</code> — schema version <strong>{schema.version}</strong>
      </p>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Required</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {schema.fields.map((f) => (
            <tr key={f.name}>
              <td><code>{f.name}</code></td>
              <td><code>{f.type}</code></td>
              <td>{f.required ? 'yes' : 'no'}</td>
              <td>{f.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
