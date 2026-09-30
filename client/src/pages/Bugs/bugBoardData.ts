import { CircleCheck, CircleDot, EyeDashed } from "lucide-react";
import type { BugBoardColumnProps } from "../types/bugBoard";

export const BugBoarColumnPropsData: BugBoardColumnProps[] = [
    {id: 1,
    title: "Open",
    icon: CircleDot,
    iconColor: "text-zinc-100",
    filter: "open",
    className: "bg-zinc-100/40"

    },
    {id: 2,
    title: "In Progress",
    icon: CircleCheck,
    iconColor: "text-blue-400",
    filter: "in progress",
    className: "bg-blue-400"
    },
    {id: 3,
    title: "In Review",
    icon: EyeDashed,
    iconColor: "text-yellow-400",
    filter: "in review",
    className: "bg-yellow-400"
    },
    {id: 4,
    title: "Resolved",
    icon: CircleCheck,
    iconColor: "text-green-400",
    filter: "resolved",
    className: "bg-green-600"
    },



]
