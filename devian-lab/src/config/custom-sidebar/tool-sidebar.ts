import { SidebarItemConfig } from "@docusaurus/plugin-content-docs/lib/sidebars/types.js";

const SidebarRootPath = 'tools';
const SubSidebarRootPath = {
  Docker: `${SidebarRootPath}/docker`,
  Git: `${SidebarRootPath}/git`,
  WSL: `${SidebarRootPath}/wsl`,
  EDITOR: `${SidebarRootPath}/editor`,
};

const SubSidebarList: SidebarItemConfig[] = [
  {
    type: 'category',
    label: `Docker`,
    description: `How to use Docker`,
    items: [
      `${SubSidebarRootPath.Docker}/frequently-used-command`,
      `${SubSidebarRootPath.Docker}/how-to-install-docker`,
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
  {
    type: 'category',
    label: `WSL`,
    description: `How to use wsl`,
    items: [
      `${SubSidebarRootPath.WSL}/how-to-use-vscode`,
      `${SubSidebarRootPath.WSL}/how-to-use-wsl2-on-windows11`,
    ],
  },
  {
    type: 'category',
    label: `Editor`,
    description: `How to use editor`,
    items: [
      `${SubSidebarRootPath.EDITOR}/how-to-add-fonts-to-vscode-for-wsl`,
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