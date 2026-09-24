import type {Subscription} from "../subscription/subscription"

export interface User{
    id: string;
    name: string;
    email: string;
    createdAt: string;
    passwordHash: string;
    isActive: boolean;
    subscription: Subscription;
};

export type createUser = Pick<User, "name" |  "email" | "passwordHash">