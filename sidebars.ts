import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tomSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: '↗ Introduction',
    },
    {
      type: 'doc',
      id: 'field-guide',
      label: '↗ Field Guide',
    },
    {
      type: 'category',
      label: 'Core Concepts',
      collapsed: false,
      items: [
        'big-idea',
        'tools',
        'structure',
        'usage-levels',
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
      label: 'How-to Guides',
      collapsed: false,
      items: [
        'small-projects',
        'monorepo-openspec',
        'prompting-guide',
      ],
    },
    {
      type: 'category',
      label: 'Explanation',
      collapsed: true,
      items: [
        'workflow-diagrams',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      items: [
        'cli-cheatsheet',
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
