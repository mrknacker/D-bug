import UserService from "../services/AuthService";
import express from "express"
import { Request, Response } from "express";
import { CreateUserRequestSchema, LoginUserRequestSchema } from "../schemas/user.schema";
import { validate } from "../middlewares/Validation";
import { registerUser, loginUser } from "../controllers/auth.controller";

const authRouter = express.Router()

/** Create New Account */
authRouter.post("/", validate(CreateUserRequestSchema), registerUser)

/** Login User */
authRouter.post("/", validate(LoginUserRequestSchema), loginUser)


export default authRouter