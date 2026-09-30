import api from "@/config/axios";
import type { CreateOrganizationForm } from "../../../shared/types/organization/organization";
import {toast} from "sonner"

export async function createOrganization (data: CreateOrganizationForm) {

    try{
        const formData = new FormData()
        
        formData.append("name", data.name)

        if(data.description){
            formData.append("description", data.description)
        }

        if(data.logo){
            formData.append("logo", data.logo)
        }

        /* Sending request */

        const response = await api.post("/api/v1/organizations", formData);

        if(response.status === 201){
            toast.success(response.data.message)
        }
        
        if(response.status === 500){
            throw new Error(response.data.error || "Failed to create your organization.")
        }

        return response.data;


    }catch(error){
        toast.error("Could not connect to the server.")
        throw error
    }

}

