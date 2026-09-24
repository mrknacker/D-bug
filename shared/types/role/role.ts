export type MemberRole =  
    | "Admin"
    | "Owner"
    | "Developer"
    | "Reviewer"


export interface Role{
    id: string;
    role: MemberRole;
    
}