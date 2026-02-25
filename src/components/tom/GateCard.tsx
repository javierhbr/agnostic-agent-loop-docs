import React from 'react';
import styles from './tom.module.css';

interface GateCardProps {
  /** Gate number — displayed large and italic in rust */
  num: string | number;
  /** Gate title in Syne display font */
  title: string;
  /** Checklist items with › prefix */
  checks?: string[];
}

export default function GateCard({ num, title, checks = [] }: GateCardProps): React.ReactElement {
  return (
    <div className={styles.gate}>
      <div className={styles.gateNum}>{num}</div>
      <div className={styles.gateTitle}>{title}</div>
      <ul className={styles.gateChecks}>
        {checks.map((check, i) => (
          <li key={i}>{check}</li>
        ))}
      </ul>
    </div>
  );
}
