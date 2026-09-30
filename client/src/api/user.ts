import api from "@/config/axios";
import type { CreateNewUser, LoginUser } from "../../../shared/types/user/user";
import {toast} from "sonner"

export async function createUser(formData: CreateNewUser)  {

    try{

    const response = await api.post("/api/v1/users", {
        name: formData.name,
        emailAddress: formData.emailAddress,
        password: formData.password
    })

    if(response.status === 201){
        toast.success("Account created successfully!")
    }

    if(response.status === 500){
       throw new Error("Failed to create your account. Try Again.")
    }

    return response.data;
}catch(error){
    toast.error("Could not connect to the server")
    throw error;
}
}

export async function loginUser(formData: LoginUser ){

    try{
        const response = await api.post("/api/v1/users", {
            emailAddress: formData.emailAddress,
            password: formData.password
        })

        if(response.status === 200){
            toast.success("Login successful!")
        }

        if(response.status === 500){
            throw new Error("Failed to Login")
        }

        return response.data;
    }catch(error){
        toast.error("Could not connect to the server")
        throw error
    }
}