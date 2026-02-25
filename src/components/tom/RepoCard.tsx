import React from 'react';
import styles from './tom.module.css';

export type RepoAccent = 'rust' | 'teal' | 'navy';

interface RepoCardProps {
  /** Top icon color and icon background variant */
  accent?: RepoAccent;
  /** Emoji icon */
  icon?: string;
  /** Card title in Syne display font */
  title: string;
  /** Monospace subtitle */
  sub?: string;
  /** File tree content — accepts JSX or plain strings */
  tree?: React.ReactNode;
}

export default function RepoCard({
  accent = 'rust',
  icon,
  title,
  sub,
  tree,
}: RepoCardProps): React.ReactElement {
  return (
    <div className={styles.repoCard}>
      <div className={`${styles.repoHd}`}>
        {icon && (
          <div className={`${styles.repoIco} ${styles[`ico-${accent}`]}`}>
            {icon}
          </div>
        )}
        <div>
          <div className={styles.repoTitle}>{title}</div>
          {sub && <div className={styles.repoSub}>{sub}</div>}
        </div>
      </div>
      {tree && <div className={styles.repoTree}>{tree}</div>}
    </div>
  );
}
