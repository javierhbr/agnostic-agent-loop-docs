import React from 'react';
import styles from './tom.module.css';

export type CalloutType = 'amber' | 'teal' | 'navy' | 'red' | 'green' | 'blue';

interface CalloutBoxProps {
  /** Accent color for the left border and label */
  type?: CalloutType;
  /** Optional monospace label displayed above the content */
  label?: string;
  /** Render content in Space Mono */
  mono?: boolean;
  children: React.ReactNode;
}

export default function CalloutBox({
  type = 'amber',
  label,
  mono = false,
  children,
}: CalloutBoxProps): React.ReactElement {
  return (
    <div className={`${styles.callout} ${styles[`callout-${type}`]}`}>
      {label && (
        <div className={`${styles.calloutLabel} ${styles[`calloutLabel-${type}`]}`}>
          {label}
        </div>
      )}
      <div className={mono ? styles.calloutMono : styles.calloutBody}>
        {children}
      </div>
    </div>
  );
}
