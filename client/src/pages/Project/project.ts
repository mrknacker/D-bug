import type { Bug } from "../Bugs/bugData";
import type { Member } from "../Member/member";

export type ProjectSource = 
    | "manual"
    | "git repository"

export type ProjectStatus = 
    | "active"
    | "inactive"
    | "deleted"

export type ProjectCategory =
    | "Frontend"
    | "Backend"
    | "Mobile"
    | "Infrastructure"
    | "Security"
    | "Developer Tools"
    | "Other";

export interface Project{
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
}