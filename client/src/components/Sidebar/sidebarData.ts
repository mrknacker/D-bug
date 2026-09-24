import {
  LayoutDashboard,
  Bug,
  FolderKanban,
  Columns4,
  Inbox,
  Users,
  Settings,
  CircleQuestionMark ,
  UsersRound,
  type LucideIcon,
  ClipboardList,
  FolderGit2,
  ShieldCheck,
  CircleUser,
  ChartLine,
  Flag,
} from "lucide-react";


export interface sidebarOrganizationItemProps{

  title: string;
  link: string;
  icon: LucideIcon
}

export interface sidebarBugItemProps{

  title: string;
  link: string;
  icon: LucideIcon
}

export interface sidebarWorkspaceItemProps{

  title: string;
  link: string;
  icon: LucideIcon
}

export const sidebarOrganizationItemsList: sidebarOrganizationItemProps[] = [

  {
    title: "Overview",
    link: "/overview",
    icon: LayoutDashboard,
  },
  {
    title: "Teams",
    link: "/teams",
    icon: UsersRound,
  },
  {
    title: "Projects",
    link: "/projects",
    icon: FolderKanban ,
  },
  {
    title: "Repositories",
    link: "/repositories",
    icon: FolderGit2 ,
  },
  {
    title: "Inbox",
    link: "/dashboard/inbox",
    icon: Inbox    ,
  },
  {
    title: "Insights",
    link: "/analysis",
    icon: ChartLine    ,
  },
]

export const sidebarBugItemsList: sidebarBugItemProps[] = [

  {
    title: "All Bugs",
    link: "/bugs",
    icon: Bug,
  },

  {
    title: "Bug Board",
    link: "/bug-board",
    icon: Columns4  ,
  },
  {
    title: "Reports",
    link: "/bugs/report",
    icon: ClipboardList,
  },
]

export const sidebarWorkspaceItemsList: sidebarWorkspaceItemProps[] = [
  {
    title: "Security",
    link: "/security",
    icon: ShieldCheck,
  },
  {
    title: "Support",
    link: "/support",
    icon: CircleUser,
  },

  {
    title: "FAQ",
    link: "/faqs",
    icon: CircleQuestionMark  ,
  },

  {
    title: "Report a Bug",
    link: "/report-bug",
    icon: Flag,
  },
  {
    title: "Settings",
    link: "/settings",
    icon: Settings,
  },
]