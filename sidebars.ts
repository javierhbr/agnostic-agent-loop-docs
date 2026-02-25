import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tomSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: '↗ Introduction',
    },
    {
      type: 'category',
      label: 'Core Concepts',
      collapsed: false,
      items: [
        'big-idea',
        'tools',
        'structure',
      ],
    },
    {
      type: 'category',
      label: 'Process',
      collapsed: false,
      items: [
        'lifecycle',
        'agents',
        'gates',
        'prompts',
      ],
    },
    {
      type: 'category',
      label: 'Operations',
      collapsed: false,
      items: [
        'roles',
        'scaling',
      ],
    },
  ],
};

export default sidebars;
