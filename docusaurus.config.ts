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
          label: 'Tutorials',
          position: 'right',
          items: [
            { to: '/tutorials/getting-started', label: 'Getting Started' },
            { to: '/agentic-agent-cli/quickstart', label: 'Quick Start' },
            { to: '/tutorials/worktree-pr-workflow', label: 'Worktree PR Workflow' },
            { to: '/tutorials/sdd-example-workflow', label: 'SDD Example Workflow' },
          ],
        },
        {
          type: 'dropdown',
          label: 'How-to Guides',
          position: 'right',
          items: [
            { to: '/how-to-guides/use-sdd-process', label: 'Use the SDD Process' },
            { to: '/small-projects', label: 'Small Projects' },
            { to: '/monorepo-openspec', label: 'Monorepo OpenSpec' },
            { to: '/prompting-guide', label: 'Prompting Guide' },
            { to: '/how-to-guides/avoid-common-antipatterns', label: 'Avoid Anti-Patterns' },
            { to: '/how-to-guides/use-checkpoints-and-resume', label: 'Checkpoints & Resume' },
          ],
        },
        {
          type: 'dropdown',
          label: 'Reference',
          position: 'right',
          items: [
            { to: '/cli-cheatsheet', label: 'CLI Cheat Sheet' },
            { to: '/agentic-agent-cli/commands', label: 'Commands' },
            { to: '/agentic-agent-cli/configuration', label: 'Configuration' },
            { to: '/agentic-agent-cli/installation', label: 'Installation' },
            { to: '/reference/unified-sdd-phases', label: 'SDD Phases' },
            { to: '/reference/integrations', label: 'Integrations' },
          ],
        },
        {
          type: 'dropdown',
          label: 'Explanation',
          position: 'right',
          items: [
            { to: '/big-idea', label: 'The Big Idea' },
            { to: '/explanation/sdd-methodology', label: 'SDD Methodology' },
            { to: '/layered-context', label: 'Layered Context' },
            { to: '/lifecycle', label: 'Development Lifecycle' },
            { to: '/agents', label: 'The Four Agents' },
            { to: '/agentic-agent-cli/ralph-loop', label: 'Ralph Loop' },
            { to: '/workflow-diagrams', label: 'Workflow Diagrams' },
          ],
        },
        {
          href: 'https://github.com/javierhbr/agnostic-agent-loop',
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
          title: 'Learn',
          items: [
            { label: 'Introduction',     to: '/' },
            { label: 'Getting Started',  to: '/tutorials/getting-started' },
            { label: 'Quick Start',      to: '/agentic-agent-cli/quickstart' },
            { label: 'Field Guide',      to: '/field-guide' },
          ],
        },
        {
          title: 'Guides & Reference',
          items: [
            { label: 'CLI Cheat Sheet',  to: '/cli-cheatsheet' },
            { label: 'Commands',         to: '/agentic-agent-cli/commands' },
            { label: 'Small Projects',   to: '/small-projects' },
            { label: 'SDD Methodology',  to: '/explanation/sdd-methodology' },
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
