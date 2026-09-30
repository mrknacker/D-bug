import jwt from "jsonwebtoken";
import envConfig from "../../config/envConfig";

const JWT_SECRET_KEY = envConfig.JWT_SECRET_KEY

if(!JWT_SECRET_KEY){
    throw new Error("JWT_SECRET_KEY is missing.")
}

/* ACCESS TOKEN */
export function generateAccessToken(userId: string, payload: any): string {
    return  jwt.sign(
        payload, 
        JWT_SECRET_KEY,
        {
            algorithm: "RS256",
            expiresIn: "15m"
        }
    )
}

export function verifyAccessToken(token: string){
    return jwt.verify(token, JWT_SECRET_KEY)
}


/* REFRESH TOKEN */
export function generateRefreshToken(userId:string, payload:any):string{
    return jwt.sign(
        payload, 
        JWT_SECRET_KEY, 
        {
        algorithm: "RS256",
        expiresIn: "7d"
        }
)}

export function verifyRefreshToken(token:string){
    return jwt.verify(token, JWT_SECRET_KEY)
}