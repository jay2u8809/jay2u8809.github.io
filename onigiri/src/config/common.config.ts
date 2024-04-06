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
    label: 'De.log',
    routeBasePath: `/${BasePath}/delog/blog`, // '/delog-blog'
    directoryPath: `./${BasePath}/delog/blog`,
    blogSidebarTitle: 'All posts',
    blogSidebarCount: sidebarCount,
  },
  // living.log
  livinglog: {
    id: 'living-log',
    label: 'Living.log',
    routeBasePath: `/${BasePath}/livinglog/blog`,  // '/livinglog-blog'
    directoryPath: `./${BasePath}/livinglog/blog`,
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
    id: 'de-log',
    label: 'De.log Docs',
    sidebarPath: './sidebars.ts',
    sidebarId: 'delogSidebar',
    routeBasePath: `${BasePath}/delog/docs`,
    introPath: `/${BasePath}/delog/docs/intro`,
    directoryPath: `./${BasePath}/delog/docs`,
  },
  // living.log
  livingLogDocs: {
    id: 'living-log',
    label: 'Living.log Docs',
    sidebarPath: './sidebars.ts',
    sidebarId: 'livinglogSidebar',
    routeBasePath: `${BasePath}/livinglog/docs`,
    introPath: `/${BasePath}/livinglog/docs/intro`,
    directoryPath: `./${BasePath}/livinglog/docs`,
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
      },
      {
        // De.log Blog
        label: BlogConfig.delog.label,
        to: BlogConfig.delog.routeBasePath, 
        visible: true,
      },
      {
        // Living.log Blog
        label: BlogConfig.livinglog.label,
        to: BlogConfig.livinglog.routeBasePath, 
        href: BlogConfig.livinglog.routeBasePath, 
        visible: true,
      },
      {
        // Default Docs
        label: DocsConfig.defaultDocs.label,
        to: DocsConfig.defaultDocs.introPath, 
        type: DocsConfig.docsType,
        sidebarId: DocsConfig.defaultDocs.sidebarId,
        visible: false,
      },
      {
        // De.log Docs
        label: DocsConfig.delogDocs.label,
        to: DocsConfig.delogDocs.introPath, 
        type: DocsConfig.docsType,
        sidebarId: DocsConfig.delogDocs.sidebarId,
        visible: false,
      },
      {
        // Living.log Docs
        label: DocsConfig.livingLogDocs.label,
        to: DocsConfig.livingLogDocs.introPath, 
        sidebarId: DocsConfig.livingLogDocs.sidebarId,
        type: DocsConfig.docsType,
        visible: false,
      },
    ],
    community: [
      {
        label: 'Velog',
        href: 'https://velog.io/@jay2u8809/posts',
        visible: true,
      }
    ],
    more: [
      {
        label: 'GitHub',
        href: 'https://github.com/jay2u8809',
        visible: true,
      },
      {
        label: 'About Onigiri.J',
        href: '/page/resume/profile',
        visible: false,
      },
    ],
  },
}

export default config;