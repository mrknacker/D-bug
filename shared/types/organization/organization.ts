import type {User} from "../user/user";
import type {Team} from "../team/team";
import type { Project } from "../project/project"

export interface Organization{
    id: string;
    name: string;
    logoURL?: string;
    owner: User;
    isActive: boolean;
    projects?: Project[] | null;
    teams: Team[];
    createdAt: string;
    updatedAt: string;
}

export type CreateOrganization = Pick<Organization, "name" | "logoURL">

