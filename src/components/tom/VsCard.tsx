import React from 'react';
import styles from './tom.module.css';

interface VsCardProps {
  /** Items for the "bad" (left) card */
  badItems?: string[];
  /** Items for the "good" (right) card */
  goodItems?: string[];
  /** Left card header label */
  badLabel?: string;
  /** Right card header label */
  goodLabel?: string;
}

export default function VsCard({
  badItems = [],
  goodItems = [],
  badLabel = 'Without SDD',
  goodLabel = 'With SDD + MCP',
}: VsCardProps): React.ReactElement {
  return (
    <div className={styles.vsRow}>
      {/* Bad card */}
      <div className={`${styles.vsCard} ${styles.bad}`}>
        <div className={`${styles.vsLabel} ${styles.badLbl}`}>
          <span>↑</span>
          {badLabel.toUpperCase()}
        </div>
        <ul className={styles.vsItems}>
          {badItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* VS divider */}
      <div className={styles.vsDiv}>vs.</div>

      {/* Good card */}
      <div className={`${styles.vsCard} ${styles.good}`}>
        <div className={`${styles.vsLabel} ${styles.goodLbl}`}>
          <span>✓</span>
          {goodLabel.toUpperCase()}
        </div>
        <ul className={`${styles.vsItems} ${styles.g}`}>
          {goodItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
