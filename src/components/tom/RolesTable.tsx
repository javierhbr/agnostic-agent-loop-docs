import React from 'react';
import styles from './tom.module.css';

export interface RoleRow {
  role: string;
  repo?: string;
  owns: string;
  accountable: string;
}

interface RolesTableProps {
  rows: RoleRow[];
}

export default function RolesTable({ rows }: RolesTableProps): React.ReactElement {
  return (
    <div className={styles.rolesTbl}>
      {/* Header */}
      <div className={`${styles.rRow} ${styles.rHd}`}>
        <div className={`${styles.rCell} ${styles.hc}`}>Role</div>
        <div className={`${styles.rCell} ${styles.hc}`}>Owns</div>
        <div className={`${styles.rCell} ${styles.hc}`}>Accountable For</div>
      </div>

      {/* Body rows */}
      {rows.map((row, i) => (
        <div className={styles.rRow} key={i}>
          <div className={styles.rCell}>
            <div className={styles.rName}>{row.role}</div>
            {row.repo && <div className={styles.rRepo}>{row.repo}</div>}
          </div>
          <div className={styles.rCell}>
            <p>{row.owns}</p>
          </div>
          <div className={styles.rCell}>
            <p>{row.accountable}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
