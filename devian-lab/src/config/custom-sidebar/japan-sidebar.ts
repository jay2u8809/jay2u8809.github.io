import { SidebarItemConfig } from "@docusaurus/plugin-content-docs/lib/sidebars/types.js";

const SidebarRootPath = 'japan';
const SubSidebarRootPath = {};

const SubSidebarList: SidebarItemConfig[] = [
  `${SidebarRootPath}/how-to-change-driver-licence`, 
  `${SidebarRootPath}/how-to-prepare-for-visa-renewal`,
  `${SidebarRootPath}/how-to-apply-for-visa-renewal`,
  `${SidebarRootPath}/how-to-set-apn-linemobile`,
]

export const JapanSidebar: SidebarItemConfig = {
  type: 'category',
  label: '일본 생활',
  description: 'Japː談 일본 생활 이야기',
  items: [...SubSidebarList],
};