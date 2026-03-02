import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { themes as prismThemes } from 'prism-react-renderer';
import type { ThemeConfig } from '@docusaurus/preset-classic';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('./package.json');

const config: Config = {
  title: 'AgenticAgent + SDD + MCP',
  tagline: 'Spec-Driven Development',
  favicon: 'img/favicon.ico',

  url: 'https://javierhbr.github.io',
  baseUrl: '/agnostic-agent-loop-docs/',

  organizationName: 'javierhbr',
  projectName: 'agnostic-agent-loop-docs',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // ── Client modules (scroll fade-in observer) ────────────
  clientModules: [
    require.resolve('./src/clientModules/fadeIn.ts'),
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',           // Serve docs at site root
          editUrl: 'https://github.com/javierhbr/agnostic-agent-loop-docs/edit/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // ── Color mode ───────────────────────────────────────
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    // ── Navbar ──────────────────────────────────────────
    navbar: {
      title: 'AgenticAgent · V3.0 · 2026',
      logo: {
        alt: 'AgenticAgent Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Core Concepts',
          position: 'right',
          items: [
            { to: '/big-idea', label: 'The Big Idea' },
            { to: '/tools', label: 'Tools & MCPs' },
            { to: '/structure', label: 'Repository Structure' },
            { to: '/usage-levels', label: 'Usage Levels' },
            { to: '/layered-context', label: '3-Tier Layered Context' },
          ],
        },
        {
          type: 'dropdown',
          label: 'Process',
          position: 'right',
          items: [
            { to: '/lifecycle', label: 'Development Lifecycle' },
            { to: '/agents', label: 'The Four Agents' },
            { to: '/gates', label: 'The 5 Gates' },
            { to: '/prompts', label: 'Example Prompts' },
          ],
        },
        {
          type: 'dropdown',
          label: 'How-to Guides',
          position: 'right',
          items: [
            { to: '/small-projects', label: 'Small Projects' },
            { to: '/monorepo-openspec', label: 'Monorepo OpenSpec' },
            { to: '/prompting-guide', label: 'Prompting Guide' },
          ],
        },
        {
          type: 'dropdown',
          label: 'Agentic Agent CLI',
          position: 'right',
          items: [
            { to: '/agentic-agent-cli', label: 'Overview' },
            { to: '/agentic-agent-cli/quickstart', label: 'Quick Start' },
            { to: '/agentic-agent-cli/idea-refine', label: 'Idea Refinement' },
            { to: '/agentic-agent-cli/installation', label: 'Installation' },
            { to: '/agentic-agent-cli/configuration', label: 'Configuration' },
            { to: '/agentic-agent-cli/commands', label: 'Commands' },
            { to: '/agentic-agent-cli/skills', label: 'Skill Packs' },
            { to: '/agentic-agent-cli/automation', label: 'Automation' },
          ],
        },
        {
          type: 'dropdown',
          label: 'Explanation',
          position: 'right',
          items: [
            { to: '/workflow-diagrams', label: 'Workflow Diagrams' },
          ],
        },
        {
          type: 'dropdown',
          label: 'Reference',
          position: 'right',
          items: [
            { to: '/cli-cheatsheet', label: 'CLI Cheat Sheet' },
          ],
        },
        {
          type: 'dropdown',
          label: 'Operations',
          position: 'right',
          items: [
            { to: '/roles', label: 'Roles & Responsibilities' },
            { to: '/scaling', label: 'Scaling Guide' },
          ],
        },
        {
          href: 'https://github.com/your-org/agenticagent',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    // ── Docs sidebar ────────────────────────────────────
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },

    // ── Footer ──────────────────────────────────────────
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Introduction',  to: '/'          },
            { label: 'The Big Idea',  to: '/big-idea'  },
            { label: 'Tools & MCPs',  to: '/tools'     },
            { label: 'Lifecycle',     to: '/lifecycle' },
            { label: 'Agents',        to: '/agents'    },
          ],
        },
        {
          title: 'Reference',
          items: [
            { label: 'Roles',       to: '/roles'    },
            { label: 'Exit Gates',  to: '/gates'    },
            { label: 'Prompts',     to: '/prompts'  },
            { label: 'Scaling',     to: '/scaling'  },
          ],
        },
        {
          title: 'Resources',
          items: [
            { label: 'GitHub', href: 'https://github.com/javierhbr/agnostic-agent-loop' },
          ],
        },
      ],
      copyright:
        `"Software is no longer just built — it is specified, validated, and executed as a system of knowledge." — AgenticAgent v${pkg.version}`,
    },

    // ── Syntax highlighting ─────────────────────────────
    prism: {
      theme: {
        plain: {
          backgroundColor: '#faf8f4',
          color: '#2e3150',
        },
        styles: [
          {
            types: ['comment', 'prolog', 'doctype', 'cdata'],
            style: { color: '#888ea8', fontStyle: 'italic' as const },
          },
          {
            types: ['string', 'attr-value'],
            style: { color: '#2a7d4f' },
          },
          {
            types: ['punctuation', 'operator'],
            style: { color: '#888ea8' },
          },
          {
            types: ['number', 'boolean', 'variable', 'constant', 'property', 'regex'],
            style: { color: '#1a7a6d' },
          },
          {
            types: ['atrule', 'attr-name', 'selector'],
            style: { color: '#1e2d6b' },
          },
          {
            types: ['function', 'deleted', 'tag'],
            style: { color: '#c47d0e' },
          },
          {
            types: ['keyword'],
            style: { color: '#b93030' },
          },
          {
            types: ['function-variable'],
            style: { color: '#2d5fcc' },
          },
        ],
      },
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'yaml', 'json', 'markdown', 'typescript'],
    },

    // ── Table of contents ────────────────────────────────
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
  } satisfies ThemeConfig,
};

export default config;
