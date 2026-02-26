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
      label: 'Agentic Agent CLI',
      collapsed: false,
      items: [
        'agentic-agent-cli/overview',
        'agentic-agent-cli/quickstart',
        {
          type: 'category',
          label: 'Examples',
          collapsed: false,
          items: [
            'agentic-agent-cli/idea-refine',
            'agentic-agent-cli/examples-sdd-ecommerce',
            {
              type: 'category',
              label: 'SDD E-commerce (Full)',
              collapsed: true,
              items: [
                'agentic-agent-cli/examples-sdd/examples-sdd-summary',
                'agentic-agent-cli/examples-sdd/examples-sdd-setup',
                'agentic-agent-cli/examples-sdd/examples-sdd-initiative',
                'agentic-agent-cli/examples-sdd/examples-sdd-risk',
                'agentic-agent-cli/examples-sdd/examples-sdd-analyst',
                'agentic-agent-cli/examples-sdd/examples-sdd-architect',
                'agentic-agent-cli/examples-sdd/examples-sdd-developer',
                'agentic-agent-cli/examples-sdd/examples-sdd-verifier',
                'agentic-agent-cli/examples-sdd/examples-sdd-gate-checks',
              ],
            },
          ],
        },
        'agentic-agent-cli/installation',
        'agentic-agent-cli/configuration',
        'agentic-agent-cli/commands',
        'agentic-agent-cli/skills',
        'agentic-agent-cli/ralph-loop',
        'agentic-agent-cli/automation',
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
