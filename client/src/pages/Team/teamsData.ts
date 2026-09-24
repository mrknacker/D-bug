import { UserRoundGroup, Activity, Plus } from "lucide-react"
import {teams} from "../../assets/assets"
import type { KPI } from "../types/kpi"
import type { Team } from "../../../../shared/types/team/team"
import type { TableColumn } from "../types/table"

export const teamsKPI: KPI[] = [

  {id: 1,
    title: "Total Teams",
   data: teams.length,
   description: "Total Number of Teams",
   icon: UserRoundGroup,
   iconColor: "text-[var(--text-tertiary)]"
  },
    {
   id: 2,
   title: "Active Teams",
   data: teams.length,
   description: "Teams currently Active",
   icon: Activity,
   iconColor: "text-[var(--text-tertiary)]"
  },
  {
   id: 3,
   title: "Most Untriaged Bug Teams  ",
   data: teams.length,
   description: "Total Number of Teams",
   icon: UserRoundGroup,
      iconColor: "text-[var(--text-tertiary)]"
  },
  {id: 4,
    title: "Total Teams",
   data: teams.length,
   description: "Total Number of Teams",
   icon: UserRoundGroup,
      iconColor: "text-[var(--text-tertiary)]"
  }

]

export const teamTableColumns: TableColumn<Team>[] = [
    {
    key: "name",
    header: "Name"
    },
    {key: "members",
    header: "Members"
    },
    {key: "projects",
    header: "Projects"
    },
    {
    key: "status",
    header: "Status"
    },
]

