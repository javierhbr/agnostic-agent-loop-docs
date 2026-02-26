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
        'core-concepts/big-idea',
        'core-concepts/tools',
        'core-concepts/structure',
        'core-concepts/usage-levels',
      ],
    },
    {
      type: 'category',
      label: 'Process',
      collapsed: false,
      items: [
        'process/lifecycle',
        'process/agents',
        'process/gates',
        'process/prompts',
      ],
    },
    {
      type: 'category',
      label: 'How-to Guides',
      collapsed: false,
      items: [
        'how-to-guides/small-projects',
        'how-to-guides/monorepo-openspec',
        'how-to-guides/prompting-guide',
      ],
    },
    {
      type: 'category',
      label: 'Explanation',
      collapsed: true,
      items: [
        'explanation/workflow-diagrams',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      items: [
        'reference/cli-cheatsheet',
      ],
    },
    {
      type: 'category',
      label: 'Operations',
      collapsed: false,
      items: [
        'operations/roles',
        'operations/scaling',
      ],
    },
  ],
};

export default sidebars;
