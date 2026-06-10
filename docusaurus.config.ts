import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'STTAR Documentation',
  tagline: 'Fiber-optic network design — product manuals',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.example.invalid',
  baseUrl: '/',

  organizationName: 'setics',
  projectName: 'sttar-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
  },

  presets: [
    [
      'classic',
      {
        // The 'advanced-designer' manual is the primary docs instance.
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'advanced-designer',
        path: 'docs-advanced-designer',
        routeBasePath: 'advanced-designer',
        sidebarPath: './sidebarsAdvancedDesigner.ts',
        lastVersion: '2.4',
        versions: {
          current: {label: 'Next (2.5)', path: 'next'},
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'planner',
        path: 'docs-planner',
        routeBasePath: 'planner',
        sidebarPath: './sidebarsPlanner.ts',
        lastVersion: '2.4',
        versions: {
          current: {label: 'Next (2.5)', path: 'next'},
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'batch-engine',
        path: 'docs-batch-engine',
        routeBasePath: 'batch-engine',
        sidebarPath: './sidebarsBatchEngine.ts',
        lastVersion: '2.4',
        versions: {
          current: {label: 'Next (2.5)', path: 'next'},
        },
      },
    ],
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: ['advanced-designer', 'planner', 'batch-engine'],
        // No default docs instance exists (all use custom ids); point the
        // search bar's preferred-version lookup at a real instance.
        docsPluginIdForPreferredVersion: 'advanced-designer',
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'STTAR Docs',
      logo: {
        alt: 'STTAR',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          docsPluginId: 'advanced-designer',
          position: 'left',
          label: 'Advanced Designer',
        },
        {
          type: 'doc',
          docId: 'intro',
          docsPluginId: 'planner',
          position: 'left',
          label: 'Planner',
        },
        {
          type: 'doc',
          docId: 'intro',
          docsPluginId: 'batch-engine',
          position: 'left',
          label: 'Batch Engine',
        },
        {
          to: '/downloads',
          label: 'Downloads',
          position: 'left',
        },
        {
          type: 'docsVersionDropdown',
          docsPluginId: 'advanced-designer',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Manuals',
          items: [
            {label: 'Advanced Designer', to: '/advanced-designer/intro'},
            {label: 'Planner', to: '/planner/intro'},
            {label: 'Batch Engine', to: '/batch-engine/intro'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Setics. Documentation draft.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
