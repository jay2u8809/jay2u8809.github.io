export type PositionType = 'left' | 'right';
type SidebarCountType = number | 'ALL';

const BasePath = 'onigiri';

const sidebarCount = (count?: number): SidebarCountType => count || 'ALL';
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
  // essay
  essay: {
    id: 'blog-essay',
    label: 'Essay',
    routeBasePath: `/${BasePath}/blog/essay`,
    directoryPath: `./${BasePath}/blog/essay`,
    blogSidebarTitle: 'All posts',
    blogSidebarCount: sidebarCount,
  },
  // travel
  travel: {
    id: 'blog-travel',
    label: 'Travel',
    routeBasePath: `/${BasePath}/blog/travel`,
    directoryPath: `./${BasePath}/blog/travel`,
    blogSidebarTitle: undefined,
    blogSidebarCount: sidebarCount,
  },
   // review
   review: {
    id: 'blog-review',
    label: 'Review',
    routeBasePath: `/${BasePath}/blog/review`,
    directoryPath: `./${BasePath}/blog/review`,
    blogSidebarTitle: 'All posts',
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
  delog: {
    id: 'wiki-delog',
    label: 'De.log',
    sidebarPath: './sidebars.ts',
    sidebarId: 'delogSidebar',
    routeBasePath: `${BasePath}/delog`,
    introPath: `/${BasePath}/delog/intro`,
    directoryPath: `./${BasePath}/delog`,
  },
};

const config = {
  gitRepo: {
    userName: 'jay2u8809',
    url: `https://jay2u8809.github.io`,
    name: `jay2u8809.github.io`
  },
  links: {
    menu: [
      // === Blog ===
      {
        // Defualt Blog
        label: BlogConfig.defaultBlog.label,
        to: BlogConfig.defaultBlog.routeBasePath, 
        visible: false,
        sort: 999,
      },
      {
        // Essay Blog
        label: BlogConfig.essay.label,
        to: BlogConfig.essay.routeBasePath, 
        visible: true,
        sort: 3,
      },
      {
        // Travel Blog
        label: BlogConfig.travel.label,
        to: BlogConfig.travel.routeBasePath, 
        href: BlogConfig.travel.routeBasePath, 
        visible: true,
        sort: 4,
      },
      {
        // Review Blog
        label: BlogConfig.review.label,
        to: BlogConfig.review.routeBasePath, 
        href: BlogConfig.review.routeBasePath, 
        visible: true,
        sort: 5,
      },
      // ===// Blog ===
      // === Docs ===
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
        label: DocsConfig.delog.label,
        to: DocsConfig.delog.introPath, 
        type: DocsConfig.docsType,
        sidebarId: DocsConfig.delog.sidebarId,
        visible: true,
        sort: 1,
      },
      // ===// Docs ===
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