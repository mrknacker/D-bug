export type SubscriptionPlan = | "basic" | "pro"

export interface Subscription{
    id: string;
    name: SubscriptionPlan;
    price: number;
}

