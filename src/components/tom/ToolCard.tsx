import React from 'react';
import styles from './tom.module.css';

export type ToolCardAccent = 'rust' | 'teal' | 'navy' | 'amber' | 'green';

interface ToolCardProps {
  /** Top accent bar color */
  accent?: ToolCardAccent;
  /** Badge label text */
  badge?: string;
  /** Card title in Syne display font */
  title: string;
  /** Monospace sub-layer label */
  layer?: string;
  /** Italic description */
  desc?: string;
  /** Bullet list items */
  items?: string[];
  /** Optional emoji icon for the badge */
  icon?: string;
}

export default function ToolCard({
  accent = 'rust',
  badge,
  title,
  layer,
  desc,
  items = [],
  icon,
}: ToolCardProps): React.ReactElement {
  return (
    <div className={`${styles.toolCard} ${styles[`tc-${accent}`]}`}>
      {badge && (
        <span className={`${styles.badge} ${styles[`badge-${accent}`]}`}>
          {icon && <span>{icon}</span>}
          {badge}
        </span>
      )}
      <h3 className={styles.toolTitle}>{title}</h3>
      {layer && <div className={styles.toolLayer}>{layer}</div>}
      {desc && <p className={styles.toolDesc}>{desc}</p>}
      {items.length > 0 && (
        <ul className={styles.toolList}>
          {items.map((item, i) => (
            <li key={i}>
              <span className={`${styles.dot} ${styles[`dot-${accent}`]}`} />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
