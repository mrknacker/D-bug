import prisma from "../db/prisma.ts";
import { PrismaClient } from "../../generated/prisma/client.ts";
import { CreateNewUser, CreateNewUserResponse, LoginUser} from "../../../shared/types/user/user.ts";
import { CreateUserRequestSchema, CreateUserResponseSchema } from "../schemas/user.schema.ts";
import { DbugError } from "../utils/DbugError.ts";
import { hashPassword, verifyPassword } from "../utils/auth/Hashing.ts";

class UserService{

    constructor(private prisma: PrismaClient){
        this.prisma = prisma
    }

    async createUser (userData: CreateNewUser) : Promise<CreateNewUserResponse> {

        /**
         * This function registers a new user account.
         * 
         * @param {string} name - Full Name
         * @param {string} emailAddress -Email Address
         * @param {string} password - Plain text password
         * @returns {object} - Returns user data {id, name, emailAddress}
         */

        console.log("Request received by User service")

        /* Checking for existing user*/
        console.log("Checking for existing user")
        const existingUser = await this.prisma.user.findFirst({where: {emailAddress: userData.emailAddress}})

        if(existingUser){
            throw new DbugError("User already exists!", 409);      
        }

        /* Hashing the password using bcrypt*/
        console.log("Hashing the password")
        const hashedPassword = await hashPassword(userData.password)
        /* UserData to be passed for creating a user */
        const data = {  ...userData, password:  hashedPassword
        }

        console.log("Password being saved:", data.password);

        console.log("Creating user:", data);

        return await this.prisma.user.create({data, select: {
            id: true,
            name: true,
            emailAddress: true
        }}) 
    }

            
    /**
     * This function registers a new user account.
     * 
     * @param {string} emailAddress -Email Address
     * @param {string} password - Plain text password
     * @returns {object} - Returns user data {id, name, emailAddress}
     * 
     */
    async loginUser(userData: LoginUser){

        console.log("Request received by User service")

        const {emailAddress, password} = userData;

        console.log("Fetching user details")

        const user = await this.prisma.user.findFirst({where: {emailAddress: userData.emailAddress}})

        if(!user){
            throw new DbugError("User not found", 404)
        }

        console.log("Verifying hashed password")

        const isVerified = await verifyPassword(userData.password, user.password)

        if(!isVerified){
            throw new DbugError("Incorrect email address or password", 401)
        }

        return user;

    }

}

export default UserService