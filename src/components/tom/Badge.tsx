import React from 'react';
import styles from './tom.module.css';

export type AccentColor = 'rust' | 'teal' | 'navy' | 'amber' | 'green' | 'blue' | 'red';

interface BadgeProps {
  /** Color variant — maps to CSS module class */
  type?: AccentColor;
  /** Show a small colored dot before text */
  dot?: boolean;
  children: React.ReactNode;
}

export default function Badge({ type = 'rust', dot = false, children }: BadgeProps): React.ReactElement {
  return (
    <span className={`${styles.badge} ${styles[`badge-${type}`]}`}>
      {dot && <span className={`${styles.dot} ${styles[`dot-${type}`]}`} />}
      {children}
    </span>
  );
}
