import { SidebarItemConfig } from "@docusaurus/plugin-content-docs/lib/sidebars/types.js";

const SidebarRootPath = 'programming';
const SubSidebarRootPath = {
  NodeJs: `${SidebarRootPath}/nodejs`,
  ShellScript: `${SidebarRootPath}/shell-script`,
  React: `${SidebarRootPath}/react`,
};

const SubSidebarList: SidebarItemConfig[] = [
  // node.js
  {
    type: 'category',
    label: `Node.js`,
    description: `About JS, TS and Node.js`,
    items: [
      {
        type: 'category',
        label: `Jest`,
        description: `How to use Jest`,
        items: [
          `${SubSidebarRootPath.NodeJs}/jest/how-to-mocking-on-jest`,
          `${SubSidebarRootPath.NodeJs}/jest/how-to-do-unit-test-on-jest`,
          `${SubSidebarRootPath.NodeJs}/jest/how-to-adopt-jest`,
        ],
      },
      `${SubSidebarRootPath.NodeJs}/how-to-convert-data-type`,
      `${SubSidebarRootPath.NodeJs}/how-to-increase-nodejs-default-memory`,
    ],
  },
  // shell script
  {
    type: 'category',
    label: `ShellScript`,
    description: `About Shell Script`,
    items: [
      `${SubSidebarRootPath.ShellScript}/how-to-set-default-value`,
    ],
  },
  // react
  {
    type: 'category',
    label: `React`,
    description: `About React`,
    items: [
      `${SubSidebarRootPath.React}/how-to-use-if-else`,
      `${SubSidebarRootPath.React}/how-to-use-map`,
    ],
  },
]

export const ProgrammingSidebar: SidebarItemConfig = {
  type: 'category',
  label: 'Promgramming',
  description: 'About P.L',
  items: [...SubSidebarList],
};