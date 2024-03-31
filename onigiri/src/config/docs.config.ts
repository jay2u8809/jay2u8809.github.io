
const config = {
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
    routeBasePath: '/delog/docs',
    introPath: '/delog/docs/intro',
    directoryPath: './delog/docs',
  },
  // life.log
  lifeLogDocs: {
    id: 'life-log',
    label: 'Life.log Docs',
    sidebarPath: './sidebars.ts',
    sidebarId: 'lifelogSidebar',
    routeBasePath: 'lifelog/docs',
    introPath: '/lifelog/docs/intro',
    directoryPath: './lifelog/docs',
  },
};

export default config;