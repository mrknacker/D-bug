import type {Subscription} from "../subscription/subscription"

export interface User{
    id: string;
    name: string;
    emailAddress: string;
    createdAt: string;
    password: string;
    isActive: boolean;
    subscription: Subscription;
};

export type CreateNewUser = Pick<User, "name" |  "emailAddress" | "password">

export type CreateNewUserResponse = Pick<User, "name" |  "emailAddress" | "id">

export type LoginUser = Pick<User, "emailAddress" | "password">