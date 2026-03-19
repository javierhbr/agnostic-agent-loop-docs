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

    // ── TUTORIALS ─────────────────────────────────────
    {
      type: 'category',
      label: 'Tutorials',
      collapsed: true,
      items: [
        'tutorials/getting-started',
        'tutorials/quickstart',
        'tutorials/worktree-pr-workflow',
        'tutorials/sdd-example-workflow',
        {
          type: 'category',
          label: 'SDD E-commerce (Full)',
          collapsed: true,
          items: [
            'tutorials/examples-sdd/ecommerce-overview',
            'tutorials/examples-sdd/summary',
            'tutorials/examples-sdd/setup',
            'tutorials/examples-sdd/initiative',
            'tutorials/examples-sdd/risk',
            'tutorials/examples-sdd/analyst',
            'tutorials/examples-sdd/architect',
            'tutorials/examples-sdd/developer',
            'tutorials/examples-sdd/verifier',
            'tutorials/examples-sdd/gate-checks',
          ],
        },
      ],
    },

    // ── HOW-TO GUIDES ─────────────────────────────────
    {
      type: 'category',
      label: 'How-to Guides',
      collapsed: true,
      items: [
        'how-to-guides/use-sdd-process',
        'how-to-guides/small-projects',
        'how-to-guides/monorepo-openspec',
        'how-to-guides/prompting-guide',
        'how-to-guides/idea-refine',
        'how-to-guides/avoid-common-antipatterns',
        'how-to-guides/maintain-layered-context',
        'how-to-guides/use-checkpoints-and-resume',
        'how-to-guides/use-platform-spec-tool',
        'how-to-guides/worktree-pr-examples',
        'how-to-guides/ralph-pdr-workflow',
        'how-to-guides/bdd-testing',
      ],
    },

    // ── REFERENCE ─────────────────────────────────────
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      items: [
        'reference/cli-cheatsheet',
        'reference/commands',
        'reference/configuration',
        'reference/installation',
        'reference/configuration-files',
        'reference/skills',
        'reference/automation',
        'reference/usage-levels',
        'reference/roles',
        {
          type: 'category',
          label: 'SDD Reference',
          collapsed: true,
          items: [
            'reference/spec-driven-development-cli',
            'reference/unified-sdd-phases',
            'reference/sdd-skills',
            'reference/sdd-adrs',
            'reference/pr-template',
          ],
        },
        {
          type: 'category',
          label: 'Layered Context',
          collapsed: true,
          items: [
            'reference/layered-context-model',
            'reference/layered-context-visual',
          ],
        },
        {
          type: 'category',
          label: 'Worktree & PR',
          collapsed: true,
          items: [
            'reference/worktree-pr-architecture',
            'reference/worktree-pr-implementation',
          ],
        },
        {
          type: 'category',
          label: 'Integrations',
          collapsed: true,
          items: [
            'reference/integrations',
            'reference/agentskills-compliance',
            'reference/ralph-integration-summary',
          ],
        },
        {
          type: 'category',
          label: 'Testing',
          collapsed: true,
          items: [
            'reference/agentic-helper-agent',
            'reference/agentic-helper-tests',
            'reference/bdd-reference',
          ],
        },
      ],
    },

    // ── EXPLANATION ────────────────────────────────────
    {
      type: 'category',
      label: 'Explanation',
      collapsed: true,
      items: [
        'explanation/big-idea',
        'explanation/sdd-methodology',
        'explanation/tools-and-mcps',
        'explanation/repository-structure',
        'explanation/layered-context',
        'explanation/lifecycle',
        'explanation/agents',
        'explanation/gates',
        'explanation/prompts',
        'explanation/ralph-loop',
        'explanation/cli-overview',
        'explanation/workflow-diagrams',
        'explanation/autopilot-vs-ralph',
        'explanation/multi-agent-execution',
        'explanation/platform-component-boundary',
        'explanation/adoption-strategy',
        'explanation/scaling',
        'explanation/operating-model',
        'explanation/plugin-system',
      ],
    },

    // ── INTERNAL (collapsed, for contributors) ────────
    {
      type: 'category',
      label: 'Internal',
      collapsed: true,
      items: [
        'internal/architecture-plan',
        'internal/framework-spec-01',
        'internal/framework-spec-02',
        'internal/framework-spec-03',
        'internal/task-templates',
        'internal/agent-token-awareness',
        'internal/cli-ralph-loop-design',
        'internal/ralph-loop-human-integration',
        'internal/plan-symlink-skills',
        'internal/plan-ai-agent-execution',
        'internal/plan-spec-consistency',
        'internal/sdd-mcp-analysis',
      ],
    },
  ],
};

export default sidebars;
