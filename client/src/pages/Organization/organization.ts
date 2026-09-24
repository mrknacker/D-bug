import type { User } from "../User/user";
import type { Project } from "../Project/project";
import type { Team } from "../Team/teamKPI";

export interface Organization{
    id: string;
    name: string;
    logo: string;
    owner: User;
    isActive: boolean;
    projects?: Project[] | null;
    teams: Team[];
}