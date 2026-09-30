import type {LucideIcon} from "lucide-react"

export type TeamStatus = 
    | "active"
    | "inactive"
    | "deleted"

export interface Team{
    id: string;
    name: string;
    description?: string;
    status: TeamStatus;
    members: string[];
    projects?: string[];
}

export type CreateTeamRequestProps = Pick<Team, "name" | "description" |>

export type CreateTeamResponse = Pick<Team, "id" | "name" | "description">
