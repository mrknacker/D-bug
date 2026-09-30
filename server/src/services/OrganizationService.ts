import { CreateOrganizationForm } from "../../../shared/types/organization/organization";
import { PrismaClient } from "../../generated/prisma/client";

class OrganizationService{

    constructor(private prisma: PrismaClient){  
        this.prisma = prisma
    }

    async createOrganization (data: CreateOrganizationForm) {
        
        console.log("Received data",data)

        return await this.prisma.organization.create({data})
    
    }

}

export default OrganizationService