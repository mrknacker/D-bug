import {z} from "zod";
import { SubscriptionSchema } from "./subscription.schema";

export const UserSchema = z.object({
    id: z.uuid(),
    name: z.string().min(2),
    emailAddress: z.email(),
    password: z.string().min(8),
    createdAt: z.iso.datetime({offset: true}),
    isActive: z.boolean().default(true),
    subscription: SubscriptionSchema
});

export const CreateUserRequestSchema = UserSchema.pick({
    name: true,
    emailAddress: true,
    password: true
});

export const LoginUserRequestSchema = UserSchema.pick({
    emailAddress: true,
    password: true
});

export const CreateUserResponseSchema = z.object({
    success: z.boolean(),
    message: z.string(),
    data: UserSchema.omit({
        password: true,
        createdAt: true,
        isActive: true,
        subscription:  true
    })
});