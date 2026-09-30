import { CreateUserRequestSchema } from "../schemas/user.schema";
import { Request, Response, NextFunction } from "express";
import { CreateUserResponseSchema } from "../schemas/user.schema";
import UserService from "../services/AuthService";
import prisma from "../db/prisma";
import { ZodType } from "zod";
import { DbugError } from "../utils/DbugError";
import { generateAccessToken, generateRefreshToken } from "../utils/auth/JWT";
import envConfig from "../config/envConfig";

const userService = new UserService(prisma)

/* USER CONTROLLER */

export const registerUser = async (req: Request, res: Response, next: NextFunction)   => {

    /* This controller handles new user creation request and calls UserService  */

    try{   
        console.log("Request to controller", req.body)

        const user = await userService.createUser(req.body);
        console.log("New User created", user)
    
        return res.status(201).json({success:true, message: "User Created Successfully!", data: user})
    
    }catch(error){
        if(error instanceof DbugError){
            return res.status(error.statusCode).json({message: error.message})
        }

        return res.status(500).json({message: "Internal server error"})
    }
}

export const loginUser = async(req: Request, res: Response, next: NextFunction) => {
    /* This controller handles login request and calls UserService  */

    try{
        console.log("Request received on login controller", req.body)

        const user = await userService.loginUser(req.body);

        /** Generating Access Token */

        const accessToken = generateAccessToken(user.id, {
            userId: user.id,
            emailAddress: user.emailAddress
        })

        
        /** Generating Refresh Token */

        const refreshToken = generateRefreshToken(user.id, {
            userId: user.id,
            emailAddress: user.emailAddress
        })

        /* Adding access token to cookie */

        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: envConfig.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 15 * 60 * 1000,
            path: "/"
        })

        /* Adding refresh tokens to cookie */
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: envConfig.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000,
            path: "/"
        })

        return res.status(200).json({success:true, message: "Login Successful!", data: user})

    }catch(error){
        if(error instanceof DbugError){
            return res.status(error.statusCode).json({message: error.message})
        }

        return res.status(500).json({message: "Internal server error"})
    }
}
