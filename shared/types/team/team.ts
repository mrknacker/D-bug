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

export type CreateTeamProps = Pick<Team, "name" | "description">
