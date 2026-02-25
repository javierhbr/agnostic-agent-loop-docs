import React from 'react';
import styles from './tom.module.css';

export type PromptBadgeType = 'pm' | 'arch' | 'eng' | 'ai' | 'int';

interface PromptItemProps {
  /** Role badge text */
  badge?: string;
  /** Badge color variant */
  badgeType?: PromptBadgeType;
  /** Scenario title in Syne display font */
  title: string;
  /** Context line in monospace faint style */
  context?: string;
  /** The actual prompt text shown in the bubble */
  prompt?: string;
  /** Description of the agent result */
  result?: string;
}

export default function PromptItem({
  badge,
  badgeType = 'pm',
  title,
  context,
  prompt,
  result,
}: PromptItemProps): React.ReactElement {
  return (
    <div className={styles.pItem}>
      <div className={styles.pItemHd}>
        {badge && (
          <span className={`${styles.pBadge} ${styles[`pb-${badgeType}`]}`}>
            {badge}
          </span>
        )}
        <div className={styles.pTitle}>{title}</div>
      </div>
      {context && <div className={styles.pCtx}>{context}</div>}
      {prompt && <div className={styles.pBubble}>{prompt}</div>}
      {result && <div className={styles.pResult}>{result}</div>}
    </div>
  );
}
