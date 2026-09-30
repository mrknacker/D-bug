import express from "express";
import { Request, Response } from "express";
import OrganizationService from "../services/OrganizationService";
import prisma from "../db/prisma"
import upload from "../middlewares/ImageUpload";

const organizationRouter = express.Router()
const organizationService = new OrganizationService(prisma)


organizationRouter.post("/", upload.single("image"),  async (req: Request, res: Response) => {
    
    console.log(req.body)
    
    await organizationService.createOrganization(req.body);

    return res.json({message: "Created an organization"})
})


export default organizationRouter