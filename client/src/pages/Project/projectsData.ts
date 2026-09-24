import type { KPI } from "../types/kpi"
import { projects } from "../../assets/assets"
import { FolderKanban } from "lucide-react"
import type { TableColumn } from "../types/table"
import type { Project, ProjectTableData } from "../../../../shared/types/project/project"

export const projectsKPI: KPI[] = [

  {
   id: 1,
   title: "Total Projects",
   data: projects.length,
   description: "Total Number of Projects",
   icon: FolderKanban,
   iconColor: "text-[var(--text-tertiary)]"
  },
    {
   id: 1,
   title: "Total Projects",
   data: projects.length,
   description: "Total Number of Projects",
   icon: FolderKanban,
   iconColor: "text-[var(--text-tertiary)]"
  },
    {
   id: 1,
   title: "Total Projects",
   data: projects.length,
   description: "Total Number of Projects",
   icon: FolderKanban,
   iconColor: "text-[var(--text-tertiary)]"
  },
    {
   id: 1,
   title: "Total Projects",
   data: projects.length,
   description: "Total Number of Projects",
   icon: FolderKanban,
   iconColor: "text-[var(--text-tertiary)]"
  },

]

/*

    id: string;
    name: string;
    description: string;
    status: ProjectStatus;
    source: ProjectSource;
    category: ProjectCategory;
    repoURL?: string;
    members: Member[];
    team: string;
    bugs: Bug[];


*/


export const projectTableColumns: TableColumn<ProjectTableData>[] = [

    {key: "name",
    header: "Name"
    },
    {key: "status",
    header: "Status"
    },
    {
    key: "source",
    header: "Source"
    },
    {
    key: "category",
    header: "Category"
    },
    {key: "team",
    header: "Team"
    },
]
