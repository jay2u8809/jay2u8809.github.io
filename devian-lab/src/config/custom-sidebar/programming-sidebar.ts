import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/lib/sidebars/types.js';

const SidebarRootPath = 'programming';

const Category1 = {
  NodeJs: `${SidebarRootPath}/nodejs`,
  ShellScript: `${SidebarRootPath}/shell-script`,
  React: `${SidebarRootPath}/react`,
  Java: `${SidebarRootPath}/java`,
};

const Category2 = {
  NodeJs: {
    NestJs: `${Category1.NodeJs}/nestjs`,
    Jest: `${Category1.NodeJs}/jest`,
    Tips: `${Category1.NodeJs}/tips`,
    TS: `${Category1.NodeJs}/ts`,
  },
  React: {
    ReactNative: `${Category1.React}/react-native`,
  }
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
        label: `Nest.js`,
        description: `About Nest.js`,
        items: [
          `${Category2.NodeJs.NestJs}/how-to-setup-nestjs`,
        ],
      },
      {
        type: 'category',
        label: `Jest`,
        description: `How to use Jest`,
        items: [
          `${Category2.NodeJs.Jest}/how-to-mocking-on-jest`,
          `${Category2.NodeJs.Jest}/how-to-do-unit-test-on-jest`,
          `${Category2.NodeJs.Jest}/how-to-adopt-jest`,
        ],
      },
      {
        type: 'category',
        label: `Typescript`,
        description: `About typescript`,
        items: [
          `${Category2.NodeJs.TS}/how-to-convert-data-type`,
          `${Category2.NodeJs.TS}/how-to-use-map-type`,
          `${Category2.NodeJs.TS}/how-to-use-variable-arguments-func`,
          `${Category2.NodeJs.TS}/comparison-of-loop`,
          `${Category2.NodeJs.TS}/how-to-use-operator-logical-and-or`,
          `${Category2.NodeJs.TS}/how-to-use-promise-all`,
          `${Category2.NodeJs.TS}/how-to-use-nullish-coalescing`,
        ],
      },
      {
        type: 'category',
        label: `Tips`,
        description: `About node.js tips`,
        items: [
          `${Category2.NodeJs.Tips}/how-to-increase-nodejs-default-memory`,
          `${Category2.NodeJs.Tips}/how-to-install-nodenv`,
          `${Category2.NodeJs.Tips}/how-to-encode-base64`,
          `${Category2.NodeJs.Tips}/how-to-convert-json-to-csv`,
        ],
      },
    ],
  },
  // shell script
  {
    type: 'category',
    label: `ShellScript`,
    description: `About Shell Script`,
    items: [
      `${Category1.ShellScript}/how-to-set-default-value`,
      `${Category1.ShellScript}/how-to-check-shell`,
    ],
  },
  // react
  {
    type: 'category',
    label: `React`,
    description: `About React`,
    items: [
      `${Category1.React}/how-to-use-if-else`,
      `${Category1.React}/how-to-use-map`,
      {
        type: 'category',
        label: `ReactNative`,
        description: `About react native`,
        items: [
          `${Category2.React.ReactNative}/how-to-setup-react-native`,
        ],
      },
    ],
  },
  // java
  {
    type: 'category',
    label: `Java`,
    description: `About Java`,
    items: [
      `${Category1.Java}/install-jdk-with-homebrew`,
    ],
  },
]

export const ProgrammingSidebar: SidebarItemConfig = {
  type: 'category',
  label: 'Promgramming',
  description: 'About P.L',
  items: [...SubSidebarList],
};