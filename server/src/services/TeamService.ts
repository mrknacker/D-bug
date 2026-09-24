import type {CreateTeamProps} from "../../../shared/types/team/team.ts"
import express from "express"
import prisma from "../db/prisma"
import { PrismaClient } from "../../generated/prisma/client.js";

class TeamService{

    constructor(private prisma: PrismaClient){
        this.prisma = prisma;
    }

    async createTeam(data: CreateTeamProps){
        /* This function creates a team using the "name" and "description" props */
        return await this.prisma.team.create({data});

    }

    async updateTeam(teamId: string ){
        
    }

    async deleteTeam(teamId: string){
        
    }
}

export default TeamService