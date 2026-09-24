import { PrismaClient } from "../../generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg";
import envConfig from "../config/envConfig";

const adapter = new PrismaPg({
    connectionString: envConfig.DATABASE_URL
})

const prisma = new PrismaClient({
    adapter
})

export default prisma;