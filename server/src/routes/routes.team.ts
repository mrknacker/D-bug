import express from "express"
import { Request, Response } from "express"
import prisma from "../db/prisma"
import TeamService from "../services/TeamService"

const teamRouter = express.Router()
const teamService = new TeamService(prisma)

/* CREATE A NEW TEAM */

teamRouter.post("/", async (req: Request, res: Response) => {
    try{
        console.log(req.body);
        const newTeam = await teamService.createTeam(req.body);
        
        return res.status(201).json({
            message: "Team created successfully!",
            newTeam
        });
    }catch(error){
        console.error(error);
        
        return res.status(500).json({
            error: "We couldn't assemble your team. Try again."
        })
    }

})

/* FETCH ALL TEAMS */

teamRouter.get("/", async (req, res) => {
    try{
        const teams = await prisma.team.findMany()

        return res.status(200).json({
            message: "Fetched all teams successfully!",
            teams
        });
    }catch(error){
        console.error(error)
        return res.status(500).json({error: "Error fetching teams data"})
    }
})

export default teamRouter