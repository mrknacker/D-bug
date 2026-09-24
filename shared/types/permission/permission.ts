export type ResourcePermission =

    /** USER PERMISSIONS */

    | "user:self:create"
    | "user:self:read"
    | "user:any:read"
    | "user:any:update"
    | "user:self:update"
    | "user:self:delete"
    | "user:any:delete"

    /* ORGANIZATION PERMISSIONS */

    | "organization:self:create"
    | "organization:self:update"
    | "organization:self:delete"
    | "organization:self:read"

    /* MEMBER PERMISSIONS */
    | "member:self:add"
    | "member:any:add"
    | "member:self:read"
    | "member:any:read"
    | "member:any:delete"
    | "member:self:delete"
    | "member:self:update"
    | "member:any:update"

    /* TEAM PERMISSIONS */
    | "team:self:create"
    | "team:self:update"
    | "team:self:delete"
    | "team:self:read"
    | "team:any:create"
    | "team:any:update"
    | "team:any:delete"
    | "team:any:read"

    /* PROJECT PERMISSIONS */
    | "project:any:create"
    | "project:any:update"
    | "project:any:delete"
    | "project:any:read"
    | "project:self:update"
    | "project:self:read"
    | "project:any:read"

    /* BUG PERMISSIONS */
    | "bug:any:create"
    | "bug:any:update"
    | "bug:any:delete"
    | "bug:any:read"
    | "bug:self:update"
    | "bug:self:read"
    | "bug:self:delete"
    | "bug:self:assign"
    | "bug:any:assign"

export interface Permission{
    id: string;
    permission: ResourcePermission;
}

