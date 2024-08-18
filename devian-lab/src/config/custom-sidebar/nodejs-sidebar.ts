import { SidebarItemConfig } from "@docusaurus/plugin-content-docs/lib/sidebars/types.js";

const SidebarRootPath = 'nodejs';
const SubSidebarRootPath = {
  Jest: `${SidebarRootPath}/jest`,
};

const SubSidebarList: SidebarItemConfig[] = [
  {
    type: 'category',
    label: `Jest`,
    description: `How to use Jest`,
    items: [
      `${SubSidebarRootPath.Jest}/how-to-mocking-on-jest`,
      `${SubSidebarRootPath.Jest}/how-to-do-unit-test-on-jest`
    ],
  },
]

export const NodeJsSidebar: SidebarItemConfig = {
  type: 'category',
  label: 'Node.js',
  description: 'About JS, TS and Node.js',
  items: [...SubSidebarList],
};