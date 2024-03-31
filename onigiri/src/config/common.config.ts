import BlogConfig from './blog.config';
import DocsConfig from './docs.config';

export type PositionType = 'left' | 'right';

const config = {
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