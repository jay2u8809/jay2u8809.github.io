export type PositionType = 'left' | 'right';
type SidebarCountType = number | 'ALL';

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
}

export const DocsConfig = {
  editUrl: undefined,
  docsType: 'docSidebar',
  // default
  defaultDocs: {
    label: 'Dev.ian Lab',
    sidebarPath: './sidebars.ts',
    sidebarId: 'defaultSidebar',
    routeBasePath: '/docs',
    introPath: '/docs/intro',
    directoryPath: './docs',
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
        visible: true,
        sort: 2,
      },
      // ===// Blog ===
      // === Docs ===
      {
        // Default Docs
        label: DocsConfig.defaultDocs.label,
        to: DocsConfig.defaultDocs.introPath, 
        type: DocsConfig.docsType,
        sidebarId: DocsConfig.defaultDocs.sidebarId,
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