import React from 'react';
import styles from './tom.module.css';

interface SectionHeaderProps {
  /** Section number, e.g. "01" or "01 —" */
  num?: string;
  /** Section title rendered in Syne display font */
  title: string;
  /** Optional italic description rendered below the title */
  desc?: string;
}

export default function SectionHeader({ num, title, desc }: SectionHeaderProps): React.ReactElement {
  const formattedNum = num
    ? num.includes('—') ? num : `${num} —`
    : undefined;

  return (
    <div className={styles.secBlock}>
      <div className={styles.secHd}>
        {formattedNum && (
          <span className={styles.secNum}>{formattedNum}</span>
        )}
        <h2 className={styles.secTitle}>{title}</h2>
      </div>
      {desc && <p className={styles.secDesc}>{desc}</p>}
    </div>
  );
}
