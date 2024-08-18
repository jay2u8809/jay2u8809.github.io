import { SidebarItemConfig } from "@docusaurus/plugin-content-docs/lib/sidebars/types.js";

const SidebarRootPath = 'tools';
const SubSidebarRootPath = {
  Docker: `${SidebarRootPath}/docker`,
  Git: `${SidebarRootPath}/git`,
};

const SubSidebarList: SidebarItemConfig[] = [
  {
    type: 'category',
    label: `Docker`,
    description: `How to use Docker`,
    items: [
      `${SubSidebarRootPath.Docker}/frequently-used-command`,
    ],
  },
  {
    type: 'category',
    label: `Git`,
    description: `How to use Git`,
    items: [
      `${SubSidebarRootPath.Git}/frequently-used-command`,
    ],
  },
]

export const ToolSidebar: SidebarItemConfig = {
  type: 'category',
  label: 'Tools',
  description: 'About Dev Tools',
  items: [
    ...SubSidebarList
  ],
};