export type PositionType = 'left' | 'right';
type SidebarCountType = number | 'ALL';

const BasePath = 'onigiri';

const sidebarCount = (count: number): SidebarCountType => count || 'ALL';
export const BlogConfig = {
  showReadingTime: false,
  editUrl: undefined,
  // default
  defaultBlog: {
    label: 'Blog',
    routeBasePath: '/blog',
    directoryPath: './blog',
    blogSidebarTitle: undefined,
    blogSidebarCount: sidebarCount,
  },
  // de.log
  delog: {
    id: 'de-log',
    label: 'De.log Blog',
    routeBasePath: `/${BasePath}/delog/blog`, // '/delog-blog'
    directoryPath: `./${BasePath}/delog/blog`,
    blogSidebarTitle: 'All posts',
    blogSidebarCount: sidebarCount,
  },
  // living.log
  livinglog: {
    id: 'living-log',
    label: 'Blog',
    routeBasePath: `/${BasePath}/living/blog`,  // '/livinglog-blog'
    directoryPath: `./${BasePath}/living/blog`,
    blogSidebarTitle: undefined,
    blogSidebarCount: sidebarCount,
  }
}

export const DocsConfig = {
  editUrl: undefined,
  docsType: 'docSidebar',
  // default
  defaultDocs: {
    label: 'Docs',
    sidebarPath: './sidebars.ts',
    sidebarId: 'defaultSidebar',
    routeBasePath: '/docs',
    introPath: '/docs/intro',
    directoryPath: './docs',
  },
  // de.log
  delogDocs: {
    id: 'de-log-docs',
    label: 'De.log',
    sidebarPath: './sidebars.ts',
    sidebarId: 'delogSidebar',
    routeBasePath: `${BasePath}/delog/docs`,
    introPath: `/${BasePath}/delog/docs/intro`,
    directoryPath: `./${BasePath}/delog/docs`,
  },
  // living.log
  livingLogDocs: {
    id: 'living-log-docs',
    label: 'How to do',
    sidebarPath: './sidebars.ts',
    sidebarId: 'livinglogSidebar',
    routeBasePath: `${BasePath}/living/docs`,
    introPath: `/${BasePath}/living/docs/intro`,
    directoryPath: `./${BasePath}/living/docs`,
  },
};

const config = {
  gitRepo: {
    userName: 'jay2u8809',
    url: 'https://jay2u8809.github.io',
    name: 'jay2u8809.github.io'
  },
  links: {
    menu: [
      {
        // Defualt Blog
        label: BlogConfig.defaultBlog.label,
        to: BlogConfig.defaultBlog.routeBasePath, 
        visible: false,
        sort: 999,
      },
      {
        // De.log Blog
        label: BlogConfig.delog.label,
        to: BlogConfig.delog.routeBasePath, 
        visible: false,
        sort: 999,
      },
      {
        // Living.log Blog
        label: BlogConfig.livinglog.label,
        to: BlogConfig.livinglog.routeBasePath, 
        href: BlogConfig.livinglog.routeBasePath, 
        visible: false,
        sort: 3,
      },
      {
        // Default Docs
        label: DocsConfig.defaultDocs.label,
        to: DocsConfig.defaultDocs.introPath, 
        type: DocsConfig.docsType,
        sidebarId: DocsConfig.defaultDocs.sidebarId,
        visible: false,
        sort: 999,
      },
      {
        // De.log Docs
        label: DocsConfig.delogDocs.label,
        to: DocsConfig.delogDocs.introPath, 
        type: DocsConfig.docsType,
        sidebarId: DocsConfig.delogDocs.sidebarId,
        visible: true,
        sort: 1,
      },
      {
        // Living.log Docs
        label: DocsConfig.livingLogDocs.label,
        to: DocsConfig.livingLogDocs.introPath, 
        sidebarId: DocsConfig.livingLogDocs.sidebarId,
        type: DocsConfig.docsType,
        visible: true,
        sort: 2,
      },
    ],
    community: [
      {
        label: 'Velog',
        href: 'https://velog.io/@jay2u8809/posts',
        visible: true,
        sort: 1,
      }
    ],
    more: [
      {
        label: 'GitHub',
        href: 'https://github.com/jay2u8809',
        visible: true,
        sort: 1,
      },
      {
        label: 'About Onigiri.J',
        href: '/page/resume/profile',
        visible: false,
        sort: 2,
      },
    ],
  },
}

export default config;