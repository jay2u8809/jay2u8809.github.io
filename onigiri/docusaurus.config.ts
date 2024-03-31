import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import BlogConfig from './src/config/blog.config';
import DocsConfig from './src/config/docs.config';
import CommonConfig, { PositionType } from './src/config/common.config';

const config: Config = {
  title: 'Onigiri Jung',
  tagline: '잡ː담(談)',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://jay2u8809.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/onigiri/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jay2u8809', // Usually your GitHub org/user name.
  projectName: 'jay2u8809.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      // 'classic',
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: DocsConfig.defaultDocs.sidebarPath,
          editUrl: DocsConfig.editUrl,
        },
        blog: {
          showReadingTime: BlogConfig.showReadingTime,
          editUrl: BlogConfig.editUrl,
          blogSidebarTitle: BlogConfig.defaultBlog.blogSidebarTitle,
          blogSidebarCount: BlogConfig.defaultBlog.blogSidebarCount(0),
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: undefined,
    navbar: {
      title: 'Onigiri',
      logo: {
        alt: 'Onigiri Logo',
        src: 'https://avatars.githubusercontent.com/u/43085472?v=4',
      },
      items: [
        ...CommonConfig.links.menu
          .filter(item => !!item.visible)
          .map(item => {
            return {
              label: item.label,
              to: item.to,
              tpye: item.type,
              sidebarId: item.sidebarId,
              position: 'left' as PositionType,
            }
          }),
        {
          ...CommonConfig.links.more.find(item => item.label.toLowerCase() === 'github' && item.visible),
          position: 'right' as PositionType,
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            ...CommonConfig.links.menu
              .filter(item => !!item.visible)
              .map(item => {
                return {
                  label: item.label, 
                  to: item.to
                }
              }),
          ],
        },
        {
          title: 'Community',
          items: [
            ...CommonConfig.links.community
              .filter(item => !!item.visible)
              .map(item => {
                return {
                  label: item.label,
                  href: item.href,
                }
              }),
          ],
        },
        {
          title: 'More',
          items: [
            ...CommonConfig.links.more
              .filter(item => !!item.visible)
              .map(item => {
                return {
                  label: item.label,
                  href: item.href,
                }
              }),
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} J.ian. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      '@docusaurus/plugin-content-blog',  // multi blog
      { // de.log blog
        id: BlogConfig.delog.id,
        routeBasePath: BlogConfig.delog.routeBasePath,
        path: BlogConfig.delog.directoryPath,
        blogSidebarTitle: BlogConfig.delog.blogSidebarTitle,
        blogSidebarCount: BlogConfig.delog.blogSidebarCount(0),
      },
    ],
    [
      '@docusaurus/plugin-content-blog',  // multi blog
      { // life.log blog
        id: BlogConfig.lifelog.id,
        routeBasePath: BlogConfig.lifelog.routeBasePath,
        path: BlogConfig.lifelog.directoryPath,
        blogSidebarTitle: BlogConfig.lifelog.blogSidebarTitle,
        blogSidebarCount: BlogConfig.lifelog.blogSidebarCount(5),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',  // multi docs
      { // de.log docs
        id: DocsConfig.delogDocs.id,
        path: DocsConfig.delogDocs.directoryPath,
        routeBasePath: DocsConfig.delogDocs.routeBasePath,
        sidebarPath: DocsConfig.delogDocs.sidebarPath,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',  // multi docs
      { // life.log docs
        id: DocsConfig.lifeLogDocs.id,
        path: DocsConfig.lifeLogDocs.directoryPath,
        routeBasePath: DocsConfig.lifeLogDocs.routeBasePath,
        sidebarPath: DocsConfig.lifeLogDocs.sidebarPath,
      },
    ],
  ],
};

export default config;
