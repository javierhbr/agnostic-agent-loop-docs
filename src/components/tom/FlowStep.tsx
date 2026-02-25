import React from 'react';
import styles from './tom.module.css';

export type RoleAccent = 'pm' | 'arch' | 'mcp' | 'all' | 'gate' | 'comp' | 'eng' | 'plat';

interface FlowStepProps {
  /** Role name displayed in the right-aligned role card */
  role: string;
  /** Color variant for the right border and connector dot */
  roleAccent?: RoleAccent;
  /** Optional monospace repo label inside the role card */
  roleRepo?: string;
  /** Step title in Syne display font */
  title: string;
  /** Step description */
  desc?: string;
  /** Hides the connector line below this step (use on last step) */
  isLast?: boolean;
  /** Additional content rendered below the description (e.g. MCP blocks) */
  children?: React.ReactNode;
}

export default function FlowStep({
  role,
  roleAccent = 'arch',
  roleRepo,
  title,
  desc,
  isLast = false,
  children,
}: FlowStepProps): React.ReactElement {
  return (
    <div className={styles.flowStep}>
      {/* Left: role card */}
      <div className={styles.flowRole}>
        <div className={`${styles.roleCard} ${styles[`rc-${roleAccent}`]}`}>
          <div className={styles.rcName}>{role}</div>
          {roleRepo && <div className={styles.rcOwns}>{roleRepo}</div>}
        </div>
      </div>

      {/* Center: connector dot + line */}
      <div className={styles.flowConn}>
        <div className={`${styles.fDot} ${styles[`fd-${roleAccent}`]}`} />
        {!isLast && <div className={styles.fLine} />}
      </div>

      {/* Right: content */}
      <div className={styles.flowBody}>
        <div className={styles.flowTitle}>{title}</div>
        {desc && <div className={styles.flowDesc}>{desc}</div>}
        {children}
      </div>
    </div>
  );
}
