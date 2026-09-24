import type { LucideIcon } from "lucide-react";

export interface KPI{
    id: number;
    title: string;
    data: number | string;
    description?: string;
    icon: LucideIcon;
    iconColor: string;
}

export type KPICardProps = {
    kpi: KPI
}