import api from "@/config/axios"
import type { CreateTeamRequestProps, CreateTeamResponse } from "../../../shared/types/team/team"
import {toast} from "sonner"

export async function createTeam(data: CreateTeamRequestProps): Promise<CreateTeamResponse>{
    
    try{
        const response = await api.post("/api/v1/teams", {
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
        throw error;

    }
}

export async function getAllTeams(){
    /* This function fetches data of all the teams  */

    try{
        const teams = await api.get("/api/v1/teams")

        return teams;

    }catch(error){
        toast.error("Error fetching all teams")
        console.error(error)
    }

}