import api from "@/config/axios"
import type { CreateTeamProps } from "../../../shared/types/team/team"
import {toast} from "sonner"

export async function createTeam(data: CreateTeamProps){
    
    try{

    const response = await api.post("/teams", {
        "name": data.name,
        "description": data.description})

    if(response.status === 201){
        toast.success(response.data.message);
        
    }

    if(response.status === 500){
        throw new Error(response.data.error || "Failed to create your team")
    }

    return response.data;

    }catch(error){
        toast.error("Could not connect to the server.");
        

    }
}

export async function getAllTeams(){

    try{
        const teams = await api.get("/teams")

        return teams
    }catch(error){
        toast.error("Error fetching all teams")
        console.error(error)
    }

}