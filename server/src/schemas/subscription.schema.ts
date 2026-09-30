import {z} from "zod";

export const SubscriptionSchema = z.object({
    id: z.string(),
    plan: z.enum(["BASIC", "PRO"]).default("BASIC"),
    price: z.number().positive(),
    userId: z.uuid()
})