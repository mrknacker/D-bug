import type { Bug } from "../bug/bug";
import type { Member } from "../member/member";

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

export type ProjectTableData = Omit<Project,"id" | "description" | "repoURL">