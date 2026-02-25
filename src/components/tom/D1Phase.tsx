import React from 'react';
import styles from './tom.module.css';

interface D1PhaseProps {
  /** Phase label rendered in monospace rust uppercase */
  label: string;
  /** Checklist items with □ prefix */
  items?: string[];
}

export default function D1Phase({ label, items = [] }: D1PhaseProps): React.ReactElement {
  return (
    <div className={styles.d1Phase}>
      <div className={styles.d1Lbl}>{label}</div>
      <ul className={styles.d1List}>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
