import bcrypt from "bcrypt";

export async function hashPassword(password: string): Promise<string>{
    /**
     * This function hashes a plain text password
     *
     * @param {string} password -Plain text password
     * @returns {string} - Returns a hashed password
     */
    const saltRounds: number = 10;

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    console.log("Hashed password", hashedPassword)

    return hashedPassword;
}

export async function verifyPassword(password:string, hashedPassword:string): Promise<boolean>{
    /**
     * This function verifies a plain text password against a hashed password
     *
     * @param {string} password -Plain text password
     * @param {string} hashedPassword - Hashed password
     * @returns {boolean} - Returns true if they match, and false if they do not.
     */

    const isMatching = await bcrypt.compare(password, hashedPassword)

    return isMatching;
}