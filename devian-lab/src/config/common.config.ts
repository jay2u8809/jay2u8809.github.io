export type PositionType = 'left' | 'right';
type SidebarCountType = number | 'ALL';

const sidebarCount = (count?: number): SidebarCountType => count || 'ALL';
export const BlogConfig = {
  editUrl: undefined,
  // default
  defaultBlog: {
    label: 'Posts',
    routeBasePath: '/blog',
    directoryPath: './blog',
    blogSidebarTitle: undefined,
    showReadingTime: true,
    blogSidebarCount: sidebarCount,
    postsPerPage: sidebarCount,
  },
  devPosts: {
    id:'dev-posts',
    label: 'Dev',
    routeBasePath: '/dev-posts',
    directoryPath: './dev-posts',
    blogSidebarTitle: undefined,
    showReadingTime: true,
    blogSidebarCount: sidebarCount,
    postsPerPage: sidebarCount,
  }
}

export const DocsConfig = {
  editUrl: undefined,
  docsType: 'docSidebar',
  // default
  defaultDocs: {
    label: 'Wiki',
    sidebarPath: './sidebars.ts',
    sidebarId: 'labDocsSidebar',
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
        // Dev Blog
        label: BlogConfig.devPosts.label,
        to: BlogConfig.devPosts.routeBasePath, 
        visible: true,
        sort: 1,
      },
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
        sort: 3,
      },
      // ===// Docs ===
    ],
    Tags: [
      {
        // Dev Blog
        label: `${BlogConfig.devPosts.label}`,
        to: `${BlogConfig.devPosts.routeBasePath}/tags`, 
        visible: true,
        sort: 1,
      },
      {
        // Defualt Blog
        label: `${BlogConfig.defaultBlog.label}`,
        to: `${BlogConfig.defaultBlog.routeBasePath}/tags`, 
        visible: true,
        sort: 2,
      },
      {
        // Docs
        label: `${DocsConfig.defaultDocs.label}`,
        to: `${DocsConfig.defaultDocs.routeBasePath}/tags`, 
        visible: true,
        sort: 3,
      },
    ],
    community: [
      // {
      //   label: 'Velog',
      //   href: 'https://velog.io/@jay2u8809/posts',
      //   visible: true,
      //   sort: 1,
      // }
    ],
    more: [
      {
        label: 'GitHub',
        href: 'https://github.com/jay2u8809',
        visible: true,
        sort: 1,
      },
      {
        label: 'Velog',
        href: 'https://velog.io/@jay2u8809/posts',
        visible: true,
        sort: 2,
      },
      {
        label: 'About Onigiri.J',
        href: '/page/resume/profile',
        visible: false,
        sort: 3,
      },
    ],
  },
}

export default config;