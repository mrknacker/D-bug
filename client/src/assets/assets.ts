import type { Bug } from "../../../shared/types/bug/bug";
import type { Project } from "../../../shared/types/project/project";
import type { Team } from "../../../shared/types/team/team";



export const bugs: Bug[] = [
  {
    id: "BUG-001",
    title: "Login button remains disabled after entering valid credentials",
    description:
      "The login button stays disabled even after entering a valid email and password. Refreshing the page fixes the issue temporarily.",
    status: "open",
    priority: "P1",
    severity: "critical",
    assignee: "john.doe",
    reporter: "alice.smith",
    labels: ["authentication", "frontend"],
    projectId: "project-1",
    createdAt: "2026-08-18T09:32:00Z",
    updatedAt: "2026-08-21T14:12:00Z",
    stepsToReproduce: [
      "Open the login page.",
      "Enter a valid email address.",
      "Enter a valid password.",
      "Observe the login button.",
    ],
    expectedResult:
      "The login button should become enabled after valid credentials are entered.",
    actualResult:
      "The login button remains disabled even though the credentials are valid. Refreshing the page temporarily fixes the issue.",
    stackTrace: undefined,
    environment: "Chrome 139, Windows 11, Production",
    comments: [
      "Issue appears to occur intermittently after navigating back to the login page.",
    ],
    attachments: [
      {
        id: "ATT-001",
        fileName: "login-button-disabled.png",
        fileType: "image/png",
        url: "/attachments/login-button-disabled.png",
        size: 184320,
      },
      {
        id: "ATT-002",
        fileName: "login-validation-console.txt",
        fileType: "text/plain",
        url: "/attachments/login-validation-console.txt",
        size: 4821,
      },
    ],
  },

  {
    id: "BUG-002",
    title: "Dashboard takes more than 10 seconds to load",
    description:
      "The dashboard becomes extremely slow when a workspace contains more than 500 issues.",
    status: "open",
    priority: "P2",
    severity: "high",
    assignee: "sarah.jones",
    reporter: "mike.wilson",
    labels: ["performance", "dashboard"],
    projectId: "project-1",
    createdAt: "2026-08-17T11:20:00Z",
    updatedAt: "2026-08-20T16:45:00Z",
    stepsToReproduce: [
      "Open a workspace containing more than 500 issues.",
      "Navigate to the dashboard.",
      "Wait for the dashboard to finish loading.",
    ],
    expectedResult:
      "The dashboard should load within a reasonable amount of time.",
    actualResult:
      "The dashboard takes more than 10 seconds to load and becomes noticeably unresponsive during loading.",
    stackTrace: undefined,
    environment: "Chrome 139, macOS 15, Production",
    comments: [
      "Performance degradation becomes more noticeable as the number of issues increases.",
    ],
    attachments: [
      {
        id: "ATT-003",
        fileName: "dashboard-load-time.png",
        fileType: "image/png",
        url: "/attachments/dashboard-load-time.png",
        size: 256781,
      },
      {
        id: "ATT-004",
        fileName: "dashboard-performance.har",
        fileType: "application/json",
        url: "/attachments/dashboard-performance.har",
        size: 1843200,
      },
    ],
  },

  {
    id: "BUG-003",
    title: "User avatar disappears after changing profile picture",
    description:
      "After uploading a new profile picture, the avatar disappears from the navigation bar until the user refreshes the application.",
    status: "in progress",
    priority: "P4",
    severity: "low",
    assignee: "john.doe",
    reporter: "alice.smith",
    labels: ["profile", "frontend"],
    projectId: "project-1",
    createdAt: "2026-08-19T08:15:00Z",
    updatedAt: "2026-08-22T10:30:00Z",
    stepsToReproduce: [
      "Open the user profile settings.",
      "Upload a new profile picture.",
      "Save the profile changes.",
      "Navigate back to the main application.",
      "Observe the avatar in the navigation bar.",
    ],
    expectedResult:
      "The newly uploaded profile picture should immediately appear as the user's avatar.",
    actualResult:
      "The avatar disappears from the navigation bar until the application is refreshed.",
    stackTrace: undefined,
    environment: "Firefox 141, Windows 11, Production",
    comments: [
      "The uploaded image is saved successfully and appears after refreshing.",
    ],
    attachments: [
      {
        id: "ATT-005",
        fileName: "avatar-missing-after-upload.png",
        fileType: "image/png",
        url: "/attachments/avatar-missing-after-upload.png",
        size: 142650,
      },
    ],
  },

  {
    id: "BUG-004",
    title: "Comments are duplicated when submitting quickly",
    description:
      "Clicking the submit button multiple times before the request completes creates duplicate comments.",
    status: "in progress",
    priority: "P2",
    severity: "high",
    assignee: "mike.wilson",
    reporter: "john.doe",
    labels: ["comments", "backend"],
    projectId: "project-1",
    createdAt: "2026-08-16T13:40:00Z",
    updatedAt: "2026-08-21T09:20:00Z",
    stepsToReproduce: [
      "Open an existing bug.",
      "Enter a comment.",
      "Click the submit button multiple times quickly.",
      "Wait for the requests to complete.",
      "Check the comment list.",
    ],
    expectedResult:
      "Only one comment should be created regardless of how many times the submit button is clicked while the request is processing.",
    actualResult:
      "Multiple identical comments are created when the submit button is clicked repeatedly.",
    stackTrace: undefined,
    environment: "Chrome 139, Windows 11, Production",
    comments: [
      "The issue appears to be related to missing request deduplication or button state handling.",
    ],
    attachments: [
      {
        id: "ATT-006",
        fileName: "duplicate-comments.png",
        fileType: "image/png",
        url: "/attachments/duplicate-comments.png",
        size: 198432,
      },
      {
        id: "ATT-007",
        fileName: "duplicate-comment-network-log.txt",
        fileType: "text/plain",
        url: "/attachments/duplicate-comment-network-log.txt",
        size: 9234,
      },
    ],
  },

  {
    id: "BUG-005",
    title: "Kanban cards jump when dragging between columns",
    description:
      "Dragging an issue from one column to another causes the card position to jump unexpectedly before settling into the new column.",
    status: "in progress",
    priority: "P3",
    severity: "medium",
    assignee: "sarah.jones",
    reporter: "alice.smith",
    labels: ["kanban", "frontend", "ui"],
    projectId: "project-1",
    createdAt: "2026-08-20T10:05:00Z",
    updatedAt: "2026-08-22T12:15:00Z",
    stepsToReproduce: [
      "Open the Kanban board.",
      "Select an issue card.",
      "Drag the card from one column to another.",
      "Observe the card position during the drag and drop operation.",
    ],
    expectedResult:
      "The card should move smoothly and remain aligned with the drop position.",
    actualResult:
      "The card jumps to an unexpected position before settling into the destination column.",
    stackTrace: undefined,
    environment: "Chrome 139, Windows 11, Production",
    comments: [
      "The behavior is more noticeable when columns contain a large number of cards.",
    ],
    attachments: [
      {
        id: "ATT-008",
        fileName: "kanban-card-jump.png",
        fileType: "image/png",
        url: "/attachments/kanban-card-jump.png",
        size: 231904,
      },
      {
        id: "ATT-009",
        fileName: "kanban-drag-recording.mp4",
        fileType: "video/mp4",
        url: "/attachments/kanban-drag-recording.mp4",
        size: 4832912,
      },
    ],
  },

  {
    id: "BUG-006",
    title: "Email notification is not sent when a bug is assigned",
    description:
      "Users do not receive an email notification when another team member assigns an issue to them.",
    status: "open",
    priority: "P1",
    severity: "critical",
    assignee: "mike.wilson",
    reporter: "sarah.jones",
    labels: ["notifications", "email"],
    projectId: "project-1",
    createdAt: "2026-08-15T15:25:00Z",
    updatedAt: "2026-08-19T17:00:00Z",
    stepsToReproduce: [
      "Open an existing bug.",
      "Assign the bug to another team member.",
      "Save the assignment.",
      "Check the assigned user's email inbox.",
    ],
    expectedResult:
      "The assigned user should receive an email notification about the new assignment.",
    actualResult:
      "No assignment notification email is received.",
    stackTrace: undefined,
    environment: "Production, Email notifications enabled",
    comments: [
      "The assignment itself is saved successfully in the application.",
    ],
    attachments: [
      {
        id: "ATT-010",
        fileName: "missing-assignment-email.png",
        fileType: "image/png",
        url: "/attachments/missing-assignment-email.png",
        size: 173824,
      },
    ],
  },

  {
    id: "BUG-007",
    title: "Search does not find issues by label",
    description:
      "Searching for a label such as 'frontend' returns no results even when multiple issues contain that label.",
    status: "resolved",
    priority: "P3",
    severity: "medium",
    assignee: "john.doe",
    reporter: "mike.wilson",
    labels: ["search", "filters"],
    projectId: "project-1",
    createdAt: "2026-08-14T09:10:00Z",
    updatedAt: "2026-08-18T11:50:00Z",
    stepsToReproduce: [
      "Open the issue search page.",
      "Enter a label such as 'frontend' in the search field.",
      "Run the search.",
      "Review the returned issues.",
    ],
    expectedResult:
      "All issues containing the searched label should be returned.",
    actualResult:
      "No results are returned even though multiple issues have the searched label.",
    stackTrace: undefined,
    environment: "Chrome 139, Windows 11, Production",
    comments: [
      "Searching by title and description continues to work as expected.",
    ],
    attachments: [],
  },

  {
    id: "BUG-008",
    title: "Password reset link returns an expired token error",
    description:
      "Users occasionally receive an expired-token error immediately after requesting a password reset.",
    status: "in review",
    priority: "P1",
    severity: "critical",
    assignee: "john.doe",
    reporter: "alice.smith",
    labels: ["authentication", "security", "backend"],
    projectId: "project-1",
    createdAt: "2026-08-12T07:45:00Z",
    updatedAt: "2026-08-20T13:30:00Z",
    stepsToReproduce: [
      "Open the password reset page.",
      "Enter a registered email address.",
      "Request a password reset.",
      "Open the password reset email immediately.",
      "Click the reset link.",
    ],
    expectedResult:
      "The password reset link should be valid until its configured expiration time.",
    actualResult:
      "The reset page occasionally reports that the token has already expired immediately after the request.",
    stackTrace: undefined,
    environment: "Production, Email delivery via transactional email service",
    comments: [
      "The issue appears to be intermittent and may be related to token generation or server time synchronization.",
    ],
    attachments: [
      {
        id: "ATT-011",
        fileName: "expired-reset-token.png",
        fileType: "image/png",
        url: "/attachments/expired-reset-token.png",
        size: 165432,
      },
      {
        id: "ATT-012",
        fileName: "password-reset-request.log",
        fileType: "text/plain",
        url: "/attachments/password-reset-request.log",
        size: 12754,
      },
    ],
  },

  {
    id: "BUG-009",
    title: "Bug priority is not updated in activity history",
    description:
      "Changing the bug priority works correctly, but the activity timeline does not record the change.",
    status: "resolved",
    priority: "P3",
    severity: "medium",
    assignee: "sarah.jones",
    reporter: "john.doe",
    labels: ["activity", "audit-log"],
    projectId: "project-1",
    createdAt: "2026-08-11T12:20:00Z",
    updatedAt: "2026-08-17T15:10:00Z",
    stepsToReproduce: [
      "Open an existing bug.",
      "Change its priority.",
      "Save the changes.",
      "Open the activity history.",
      "Review the recorded events.",
    ],
    expectedResult:
      "The activity history should contain an entry showing the previous and new priority.",
    actualResult:
      "The priority is updated successfully, but no corresponding activity history entry is created.",
    stackTrace: undefined,
    environment: "Production",
    comments: [
      "Bug status is resolved; monitoring is recommended to ensure the activity event is recorded consistently.",
    ],
    attachments: [
      {
        id: "ATT-013",
        fileName: "missing-priority-history.png",
        fileType: "image/png",
        url: "/attachments/missing-priority-history.png",
        size: 187621,
      },
    ],
  },

  {
    id: "BUG-016",
    title: "Submit button remains disabled after fixing validation errors",
    description:
      "After correcting all required form fields, the submit button remains disabled until the user refreshes the page.",
    status: "in review",
    priority: "P1",
    severity: "high",
    assignee: "jane.doe",
    reporter: "alice.smith",
    labels: ["forms", "frontend", "validation"],
    projectId: "project-1",
    createdAt: "2026-08-22T10:15:00Z",
    updatedAt: "2026-08-22T10:15:00Z",
    stepsToReproduce: [
      "Open a form containing required fields.",
      "Enter invalid values to trigger validation errors.",
      "Correct all invalid values.",
      "Verify that all validation errors are cleared.",
      "Observe the submit button.",
    ],
    expectedResult:
      "The submit button should become enabled once all required fields contain valid values.",
    actualResult:
      "The submit button remains disabled even after all validation errors have been corrected. Refreshing the page enables the button.",
    stackTrace: undefined,
    environment: "Chrome 139, Windows 11, Production",
    comments: [
      "Likely related to stale frontend validation state after validation errors are cleared.",
    ],
    attachments: [
      {
        id: "ATT-014",
        fileName: "submit-button-disabled.png",
        fileType: "image/png",
        url: "/attachments/submit-button-disabled.png",
        size: 152876,
      },
    ],
  },
];


export const users = [
  {
    id: "usr_001",
    name: "Aarav Sharma",
    username: "aarav",
    email: "aarav@dbug.dev",
    avatar: "/avatars/aarav.png",

    role: "Frontend Developer",
    status: "active",

    team: {
      id: "team_001",
      name: "Frontend",
      color: "teal",
    },

    organization: {
      id: "org_001",
      name: "D_bug",
    },

    stats: {
      assignedBugs: 12,
      openBugs: 7,
      resolvedBugs: 34,
      criticalBugs: 1,
      inProgress: 4,
    },

    activity: {
      lastActive: "2 minutes ago",
      bugsReported: 18,
      bugsResolved: 34,
      comments: 86,
    },

    workload: {
      capacity: 10,
      current: 7,
    },

    joinedAt: "2025-04-12",

    permissions: {
      canManageProjects: false,
      canManageTeam: false,
      canAssignBugs: true,
    },
  },

  {
    id: "usr_002",
    name: "Priya Verma",
    username: "priya",
    email: "priya@dbug.dev",
    avatar: "/avatars/priya.png",

    role: "QA Engineer",
    status: "active",

    team: {
      id: "team_002",
      name: "QA",
      color: "purple",
    },

    organization: {
      id: "org_001",
      name: "D_bug",
    },

    stats: {
      assignedBugs: 19,
      openBugs: 11,
      resolvedBugs: 52,
      criticalBugs: 2,
      inProgress: 6,
    },

    activity: {
      lastActive: "18 minutes ago",
      bugsReported: 41,
      bugsResolved: 52,
      comments: 124,
    },

    workload: {
      capacity: 12,
      current: 11,
    },

    joinedAt: "2025-02-18",

    permissions: {
      canManageProjects: false,
      canManageTeam: true,
      canAssignBugs: true,
    },
  },

  {
    id: "usr_003",
    name: "Rohan Mehta",
    username: "rohan",
    email: "rohan@dbug.dev",
    avatar: "/avatars/rohan.png",

    role: "Backend Developer",
    status: "away",

    team: {
      id: "team_003",
      name: "Backend",
      color: "blue",
    },

    organization: {
      id: "org_001",
      name: "D_bug",
    },

    stats: {
      assignedBugs: 8,
      openBugs: 3,
      resolvedBugs: 27,
      criticalBugs: 0,
      inProgress: 2,
    },

    activity: {
      lastActive: "1 hour ago",
      bugsReported: 9,
      bugsResolved: 27,
      comments: 61,
    },

    workload: {
      capacity: 10,
      current: 3,
    },

    joinedAt: "2025-06-03",

    permissions: {
      canManageProjects: false,
      canManageTeam: false,
      canAssignBugs: true,
    },
  },
];



export const projects: Project[] = [
  {
    id: "project-1",
    name: "Bug Triage",
    description: "Track, prioritize, and resolve product issues.",
    status: "active",
    source: "manual",
    category: "Other",
    members: [],
    team: "Engineering",
    bugs: [],
  },
  {
    id: "project-2",
    name: "Web Platform",
    description: "Core web application and user-facing experiences.",
    status: "active",
    source: "manual",
    category: "Frontend",
    members: [],
    team: "Frontend",
    bugs: [],
  },
  {
    id: "project-3",
    name: "Mobile App",
    description: "iOS and Android application development.",
    status: "active",
    source: "manual",
    category: "Mobile",
    members: [],
    team: "Mobile",
    bugs: [],
  },
  {
    id: "project-4",
    name: "API & Backend",
    description: "Backend services, APIs, and infrastructure.",
    status: "active",
    source: "manual",
    category: "Backend",
    members: [],
    team: "Backend",
    bugs: [],
  },
  {
    id: "project-5",
    name: "Authentication",
    description: "Login, signup, sessions, permissions, and security.",
    status: "active",
    source: "manual",
    category: "Security",
    members: [],
    team: "Security",
    bugs: [],
  },
  {
    id: "project-6",
    name: "Dashboard",
    description: "Analytics, metrics, and dashboard experiences.",
    status: "active",
    source: "manual",
    category: "Frontend",
    members: [],
    team: "Frontend",
    bugs: [],
  },
  {
    id: "project-7",
    name: "Notifications",
    description: "Email, push notifications, and in-app alerts.",
    status: "active",
    source: "manual",
    category: "Backend",
    members: [],
    team: "Backend",
    bugs: [],
  },
  {
    id: "project-8",
    name: "Search",
    description: "Search, filtering, indexing, and discovery.",
    status: "active",
    source: "manual",
    category: "Backend",
    members: [],
    team: "Backend",
    bugs: [],
  },
  {
    id: "project-9",
    name: "Developer Experience",
    description: "Developer tooling, workflows, and internal utilities.",
    status: "active",
    source: "manual",
    category: "Developer Tools",
    members: [],
    team: "Developer Experience",
    bugs: [],
  },
  {
    id: "project-10",
    name: "Infrastructure",
    description: "Cloud infrastructure, deployments, and reliability.",
    status: "active",
    source: "manual",
    category: "Infrastructure",
    members: [],
    team: "Infrastructure",
    bugs: [],
  },
  {
    id: "project-11",
    name: "Design System",
    description: "Shared components, tokens, accessibility, and UI patterns.",
    status: "active",
    source: "manual",
    category: "Frontend",
    members: [],
    team: "Frontend",
    bugs: [],
  },
  {
    id: "project-12",
    name: "Internal Tools",
    description: "Tools and workflows built for internal teams.",
    status: "active",
    source: "manual",
    category: "Developer Tools",
    members: [],
    team: "Developer Experience",
    bugs: [],
  },
];



export const projectCategories = [
  "Frontend",
  "Backend",
  "Mobile",
  "Infrastructure",
  "Security",
  "Developer Tools",
  "Other",
];

export const teams: Team[] = [
  {
    id: "team-1",
    name: "Frontend",
    description: "Builds and maintains the web experience and shared UI.",
    members: ["john.doe", "alice.smith"],
    projects: ["project-2", "project-6", "project-11"],
    status: "active",
  },
  {
    id: "team-2",
    name: "Backend",
    description: "Owns APIs, services, data, and application logic.",
    members: ["mike.wilson", "sarah.jones"],
    projects: ["project-4", "project-7", "project-8"],
    status: "active",
  },
  {
    id: "team-3",
    name: "Mobile",
    description: "Develops and maintains the iOS and Android applications.",
    members: ["jane.doe", "sarah.jones"],
    projects: ["project-3"],
    status: "active",
  },
  {
    id: "team-4",
    name: "Platform",
    description: "Keeps infrastructure, deployments, and developer tooling running smoothly.",
    members: ["mike.wilson", "john.doe"],
    projects: ["project-9", "project-10"],
    status: "active",
  },
  {
    id: "team-5",
    name: "Security",
    description: "Owns authentication, authorization, and application security.",
    members: ["jane.doe", "john.doe"],
    projects: ["project-5"],
    status: "active",
  },
  {
    id: "team-6",
    name: "Internal Tools",
    description: "Builds tools and workflows that help engineering teams move faster.",
    members: ["alice.smith", "mike.wilson"],
    projects: ["project-12"],
    status: "active",
  }, 

];



export const repositories = [
   {
    id: "repo-1",
    name: "web-platform",
    description: "Core web application and user-facing experiences.",
    projectId: "project-2",
    teamId: "team-1",
    provider: "github",
    visibility: "private",
    defaultBranch: "main",
    status: "active",
  },
  {
    id: "repo-2",
    name: "mobile-app",
    description: "iOS and Android application codebase.",
    projectId: "project-3",
    teamId: "team-3",
    provider: "github",
    visibility: "private",
    defaultBranch: "main",
    status: "active",
  },
  {
    id: "repo-3",
    name: "api",
    description: "Core backend APIs and application services.",
    projectId: "project-4",
    teamId: "team-2",
    provider: "github",
    visibility: "private",
    defaultBranch: "main",
    status: "active",
  },
  {
    id: "repo-4",
    name: "auth-service",
    description: "Authentication, sessions, and authorization services.",
    projectId: "project-5",
    teamId: "team-5",
    provider: "github",
    visibility: "private",
    defaultBranch: "main",
    status: "active",
  },
  {
    id: "repo-5",
    name: "dashboard",
    description: "Analytics and reporting dashboard.",
    projectId: "project-6",
    teamId: "team-1",
    provider: "github",
    visibility: "private",
    defaultBranch: "main",
    status: "active",
  },
  {
    id: "repo-6",
    name: "notifications",
    description: "Email, push, and in-app notification services.",
    projectId: "project-7",
    teamId: "team-2",
    provider: "github",
    visibility: "private",
    defaultBranch: "main",
    status: "active",
  },
  {
    id: "repo-7",
    name: "search-service",
    description: "Search, indexing, and filtering infrastructure.",
    projectId: "project-8",
    teamId: "team-2",
    provider: "github",
    visibility: "private",
    defaultBranch: "main",
    status: "active",
  },
  {
    id: "repo-8",
    name: "developer-cli",
    description: "Command-line tools for engineering workflows.",
    projectId: "project-9",
    teamId: "team-4",
    provider: "github",
    visibility: "public",
    defaultBranch: "main",
    status: "active",
  },
  {
    id: "repo-9",
    name: "infrastructure",
    description: "Infrastructure-as-code and deployment configuration.",
    projectId: "project-10",
    teamId: "team-4",
    provider: "github",
    visibility: "private",
    defaultBranch: "main",
    status: "active",
  },
  {
    id: "repo-10",
    name: "design-system",
    description: "Shared UI components, tokens, and design primitives.",
    projectId: "project-11",
    teamId: "team-1",
    provider: "github",
    visibility: "public",
    defaultBranch: "main",
    status: "active",
  },
  {
    id: "repo-11",
    name: "internal-tools",
    description: "Internal engineering tools and automation.",
    projectId: "project-12",
    teamId: "team-6",
    provider: "github",
    visibility: "private",
    defaultBranch: "main",
    status: "active",
  },
  {
    id: "repo-12",
    name: "bug-triage",
    description: "Bug tracking and triage application.",
    projectId: "project-1",
    teamId: "team-6",
    provider: "github",
    visibility: "private",
    defaultBranch: "main",
    status: "active",
  },
];




export const inboxMessages = [
  {
    id: "msg_001",
    from: users[0].id,
    to: users[1].id,
    subject: "Review: Login form validation changes",
    message:
      "Can you review the latest login form validation changes before we merge them?",
    type: "review",
    priority: "medium",
    status: "unread",
    createdAt: "2026-09-16T14:20:00+05:30",
  },

  {
    id: "msg_002",
    from: users[1].id,
    to: users[0].id,
    subject: "Bug triage: Login redirect issue",
    message:
      "The login flow is redirecting users to the wrong page after authentication. Please take a look and triage the issue.",
    type: "bug_triage",
    priority: "high",
    status: "unread",
    createdAt: "2026-09-16T13:48:00+05:30",
  },

  {
    id: "msg_003",
    from: users[2].id,
    to: users[1].id,
    subject: "Review: API error handling",
    message:
      "I've updated the API error handling. Please review the changes and confirm whether they're ready for QA.",
    type: "review",
    priority: "medium",
    status: "read",
    createdAt: "2026-09-16T12:35:00+05:30",
  },

  {
    id: "msg_004",
    from: users[1].id,
    to: users[2].id,
    subject: "Bug triage: 500 error on user profile",
    message:
      "QA is seeing intermittent 500 responses when loading user profiles. Can you investigate and help triage this?",
    type: "bug_triage",
    priority: "critical",
    status: "unread",
    createdAt: "2026-09-16T11:52:00+05:30",
  },

  {
    id: "msg_005",
    from: users[0].id,
    to: users[2].id,
    subject: "Review: User profile API integration",
    message:
      "The frontend integration for the user profile API is ready. Please review the endpoint usage and response handling.",
    type: "review",
    priority: "low",
    status: "read",
    createdAt: "2026-09-16T10:40:00+05:30",
  },

  {
    id: "msg_006",
    from: users[1].id,
    to: users[0].id,
    subject: "Bug triage: Mobile layout regression",
    message:
      "QA found a responsive layout regression on smaller screens. Please check the affected components and triage the bug.",
    type: "bug_triage",
    priority: "high",
    status: "unread",
    createdAt: "2026-09-16T09:25:00+05:30",
  },
];


