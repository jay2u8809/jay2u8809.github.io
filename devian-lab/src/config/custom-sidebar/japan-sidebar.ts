import { SidebarItemConfig } from "@docusaurus/plugin-content-docs/lib/sidebars/types.js";

const SidebarRootPath = 'japan';
const SubSidebarRootPath = {
  HowToDo: `${SidebarRootPath}/manual`,
};

const SubSidebarList: SidebarItemConfig[] = [
  {
    type: 'category',
    label: `Manual`,
    description: `다시하고 싶지 않은 일들에 대한 설명서`,
    items: [
      `${SubSidebarRootPath.HowToDo}/how-to-change-driver-licence`, 
      `${SubSidebarRootPath.HowToDo}/how-to-prepare-for-visa-renewal`,
      `${SubSidebarRootPath.HowToDo}/how-to-apply-for-visa-renewal`
    ],
  },
  // {
  //   type: 'category',
  //   label: `Review`,
  //   description: `후ː談`,
  //   items: [
  //   ],
  // },
]

export const JapanSidebar: SidebarItemConfig = {
  type: 'category',
  label: 'Japː談-일본 생활 이야기',
  description: 'Japː談 일본 생활 이야기',
  items: [...SubSidebarList],
};