
/** ---------------- BUG TYPES -------------**/

export type BugStatus = "open" | "in progress" | "in review" | "resolved" | "reopened"

export type BugPriority = "P1" | "P2" | "P3" | "P4" | "P5"

export type BugSeverity = "low" | "medium" | "high" | "critical"

export interface Bug {

    id: string;
    title: string;
    description: string;
    status: BugStatus;
    severity: BugSeverity;
    priority: BugPriority;
    assignee: string;
    reporter: string;
    labels: string[];
    projectId: string;
    createdAt: string;
    updatedAt: string;
    stepsToReproduce: string[];
    expectedResult: string;
    actualResult: string;
    stackTrace?: string | null;
    environment: string;
    comments?: string[];
    attachments?: BugAttachment[];   
}

export type CreateBug = Omit<Bug, "id" | "projectId" | "createdAt" | "updatedAt" | "comments"> 

/* ------ BUG CARD TYPES ---------- */

export type BugCardData = Pick<
        Bug, 
        | "id" 
        | "title"
        | "status"
        | "severity"
        | "priority"
        | "assignee"
        | "labels"
        | "updatedAt"
        | "comments"
        | "attachments"
        >;

export type BugCardProps = {
    bug: BugCardData;
}


export interface BugAttachment{
    id: string;
    fileName: string;
    fileType: string;
    url: string;
    size: number;
}

export interface BugComment{
    id: string;
    comment: string;
    author: string;
    createdAt: string;
}