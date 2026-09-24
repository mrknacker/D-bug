import type { Project } from "../project/project";
import type { Team } from "../team/team";
import type { User } from "../user/user";
import type { Role } from "../role/role";

export interface Member{
    id: string;
    user: User;
    role: Role;
    team: Team;
    associatedProjects: Project[];
}