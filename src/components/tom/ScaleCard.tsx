import React from 'react';
import styles from './tom.module.css';

export type ScaleStage = 'early' | 'growing' | 'full';

const ACTIVE_DOTS: Record<ScaleStage, number> = {
  early: 1,
  growing: 2,
  full: 3,
};

interface ScaleCardProps {
  /** Controls how many dots are filled */
  stage?: ScaleStage;
  /** Card title in Syne display font */
  title: string;
  /** Team size label in rust monospace */
  teams?: string;
  /** Italic description */
  desc?: string;
  /** Checklist items with → prefix */
  items?: string[];
}

export default function ScaleCard({
  stage = 'early',
  title,
  teams,
  desc,
  items = [],
}: ScaleCardProps): React.ReactElement {
  const activeDots = ACTIVE_DOTS[stage] ?? 1;

  return (
    <div className={styles.scaleCard}>
      <div className={styles.sDots}>
        {Array.from({ length: 3 }).map((_, i) => (
          <span
            key={i}
            className={`${styles.sDot} ${i < activeDots ? styles.sDotOn : ''}`}
          />
        ))}
      </div>
      <h3 className={styles.scaleTitle}>{title}</h3>
      {teams && <div className={styles.scaleTeams}>{teams}</div>}
      {desc && <p className={styles.scaleDesc}>{desc}</p>}
      {items.length > 0 && (
        <ul className={styles.scaleList}>
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
