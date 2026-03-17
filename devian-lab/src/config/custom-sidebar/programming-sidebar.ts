import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/lib/sidebars/types.js';

const SidebarRootPath = 'programming';

const Category1 = {
  TypeScript: `${SidebarRootPath}/typescript`,
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
  },
  React: {
    ReactNative: `${Category1.React}/react-native`,
  }
};

const SubSidebarList: SidebarItemConfig[] = [
  // typescript
  {
    type: 'category',
    label: `TypeScript`,
    description: `About TypeScript`,
    items: [
      `${Category1.TypeScript}/how-to-convert-data-type`,
      `${Category1.TypeScript}/how-to-use-map-type`,
      `${Category1.TypeScript}/how-to-use-variable-arguments-func`,
      `${Category1.TypeScript}/comparison-of-loop`,
      `${Category1.TypeScript}/how-to-use-operator-logical-and-or`,
      `${Category1.TypeScript}/how-to-use-promise-all`,
      `${Category1.TypeScript}/how-to-use-nullish-coalescing`,
      `${Category1.TypeScript}/how-to-use-filter-func`,
      `${Category1.TypeScript}/what-is-the-pure-function`,
    ],
  },
  // node.js
  {
    type: 'category',
    label: `Node.js`,
    description: `About Node.js`,
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
        key: 'nodejs-tips',
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
  label: 'Programming',
  description: 'About P.L',
  items: [...SubSidebarList],
};
