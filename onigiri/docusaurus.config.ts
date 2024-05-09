import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import CommonConfig, { BlogConfig, DocsConfig, PositionType } from './src/config/common.config';

const config: Config = {
  title: 'Onigiri Jung',
  tagline: '잡ː담(談)',
  favicon: 'img/onigiri_favicon.jpg',

  // Set the production url of your site here
  url: CommonConfig.gitRepo.url,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: CommonConfig.gitRepo.userName, // Usually your GitHub org/user name.
  projectName: CommonConfig.gitRepo.name, // Usually your repo name.
  deploymentBranch: 'main', // deployment branch name.

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
        src: 'img/onigiri_icon.jpg',
      },
      items: [
        ...CommonConfig.links.menu
          .filter(item => !!item.visible)
          .sort((before, after) => before.sort - after.sort)
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
              .sort((before, after) => before.sort - after.sort)
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
              .sort((before, after) => before.sort - after.sort)
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
              .sort((before, after) => before.sort - after.sort)
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
    // === Blog ===
    [  
      '@docusaurus/plugin-content-blog',  // multi blog
      { // essay blog
        id: BlogConfig.essay.id,
        routeBasePath: BlogConfig.essay.routeBasePath,
        path: BlogConfig.essay.directoryPath,
        blogSidebarTitle: BlogConfig.essay.blogSidebarTitle,
        blogSidebarCount: BlogConfig.essay.blogSidebarCount(0),
      },
    ],
    [
      '@docusaurus/plugin-content-blog',  // multi blog
      { // travel blog
        id: BlogConfig.travel.id,
        routeBasePath: BlogConfig.travel.routeBasePath,
        path: BlogConfig.travel.directoryPath,
        blogSidebarTitle: BlogConfig.travel.blogSidebarTitle,
        blogSidebarCount: BlogConfig.travel.blogSidebarCount(0),
      },
    ],
    [
      '@docusaurus/plugin-content-blog',  // multi blog
      { // review blog
        id: BlogConfig.review.id,
        routeBasePath: BlogConfig.review.routeBasePath,
        path: BlogConfig.review.directoryPath,
        blogSidebarTitle: BlogConfig.review.blogSidebarTitle,
        blogSidebarCount: BlogConfig.review.blogSidebarCount(0),
      },
    ],
    // ===// Blog ===
    // === Docs ===
    [
      '@docusaurus/plugin-content-docs',  // multi docs
      { // de.log docs
        id: DocsConfig.delog.id,
        path: DocsConfig.delog.directoryPath,
        routeBasePath: DocsConfig.delog.routeBasePath,
        sidebarPath: DocsConfig.delog.sidebarPath,
      },
    ],
    // ===// Docs ===
  ],
};

export default config;
