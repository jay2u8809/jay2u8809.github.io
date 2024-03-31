
type SidebarCountType = number | 'ALL';

const sidebarCount = (count: number): SidebarCountType => count || 'ALL';

const config = {
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
    routeBasePath: '/delog/blog', // '/delog-blog'
    directoryPath: './delog/blog',
    blogSidebarTitle: 'All posts',
    blogSidebarCount: sidebarCount,
  },
  // life.log
  lifelog: {
    id: 'life-log',
    label: 'Life.log',
    routeBasePath: '/lifelog/blog',  // '/lifelog-blog'
    directoryPath: './lifelog/blog',
    blogSidebarTitle: undefined,
    blogSidebarCount: sidebarCount,
  }
}

export default config;