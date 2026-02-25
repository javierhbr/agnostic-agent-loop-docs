import React, { useState } from 'react';
import styles from './tom.module.css';

export interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabPanelProps {
  tabs: Tab[];
}

export default function TabPanel({ tabs }: TabPanelProps): React.ReactElement | null {
  const [active, setActive] = useState<string>(tabs[0]?.id ?? '');

  if (!tabs.length) return null;

  const activeTab = tabs.find((t) => t.id === active);

  return (
    <div className={styles.tabPanelRoot}>
      <div className={styles.pTabs}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`${styles.pTab} ${active === tab.id ? styles.pTabOn : ''}`}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.pPanels}>
        {activeTab && (
          <div className={styles.pPanel}>{activeTab.content}</div>
        )}
      </div>
    </div>
  );
}
