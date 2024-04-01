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
  // life.log
  lifelog: {
    id: 'life-log',
    label: 'Life.log',
    routeBasePath: `/${BasePath}/lifelog/blog`,  // '/lifelog-blog'
    directoryPath: `./${BasePath}/lifelog/blog`,
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
  // life.log
  lifeLogDocs: {
    id: 'life-log',
    label: 'Life.log Docs',
    sidebarPath: './sidebars.ts',
    sidebarId: 'lifelogSidebar',
    routeBasePath: `${BasePath}/lifelog/docs`,
    introPath: `/${BasePath}/lifelog/docs/intro`,
    directoryPath: `./${BasePath}/lifelog/docs`,
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
        // Life.log Blog
        label: BlogConfig.lifelog.label,
        to: BlogConfig.lifelog.routeBasePath, 
        href: BlogConfig.lifelog.routeBasePath, 
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
        // Life.log Docs
        label: DocsConfig.lifeLogDocs.label,
        to: DocsConfig.lifeLogDocs.introPath, 
        sidebarId: DocsConfig.lifeLogDocs.sidebarId,
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