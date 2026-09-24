import {z} from "zod";

export const createTeamSchema = z.object({
    name: z.string().min(1).max(50),
    description: z.string().max(500).optional()
})

export const teamSchema = z.object({
    id: z.string(),
    
})