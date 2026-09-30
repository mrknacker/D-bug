import type {User} from "../user/user";
import type {Team} from "../team/team";
import type { Project } from "../project/project"

export interface Organization{
    id: string;
    name: string;
    description?: string;
    logo?: File | null;
    owner: User;
    isActive: boolean;
    projects?: Project[] | null;
    teams: Team[];
    createdAt: string;
    updatedAt: string;
}

export type CreateOrganizationForm = Pick<Organization, "name" | "description" | "logo">

