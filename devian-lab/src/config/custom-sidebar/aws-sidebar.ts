import { SidebarItemConfig } from "@docusaurus/plugin-content-docs/lib/sidebars/types.js";

const SidebarRootPath = 'aws';
const SubSidebarRootPath = {
  Amplify: `${SidebarRootPath}/amplify`,
  Tips: `${SidebarRootPath}/tips`,
  ServerlessFramework: `${SidebarRootPath}/serverless-framework`,
};

const SubSidebarList: SidebarItemConfig[] = [
  {
    type: 'category',
    label: `Serverless Framework`,
    description: `How to use Serverless Framework`,
    items: [
      `${SubSidebarRootPath.ServerlessFramework}/how-to-set-webpack-multiple-entry`,
      `${SubSidebarRootPath.ServerlessFramework}/how-to-set-prune-plugin`,
      `${SubSidebarRootPath.ServerlessFramework}/how-to-set-exclude-file`,
    ],
  },
  {
    type: 'category',
    label: `Tips`,
    description: `About How to use AWS Services`,
    items: [
      `${SubSidebarRootPath.Tips}/how-to-use-log-insights-query`,
      `${SubSidebarRootPath.Tips}/how-to-set-crontab`,
    ],
  },
  {
    type: 'category',
    label: `Amplify`,
    description: `About AWS Amplify`,
    items: [
      `${SubSidebarRootPath.Amplify}/frequently-used-command`
    ],
  },
]

export const AWSSidebar: SidebarItemConfig = {
  type: 'category',
  label: 'AWS',
  description: 'About AWS',
  items: [
    ...SubSidebarList
  ],
};