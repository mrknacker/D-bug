import { ZodType } from "zod/v4";
import { Request, Response, NextFunction, RequestHandler } from "express";
import { success, ZodObject } from "zod";


export const validate = (schema: ZodType): RequestHandler => {

    return (req: Request, res: Response, next: NextFunction) => {
            console.log("🔥 Validation middleware hit");
            const result = schema.safeParse(req.body);

            if(!result.success){
                return res.status(400).json({
                    success: false,
                    message: "Validation failed",
                    errors: result.error.issues
                })
            }

            if(result.success){
                    req.body = result.data
                }
                
            // Calling the controller
            next()
    }   

}