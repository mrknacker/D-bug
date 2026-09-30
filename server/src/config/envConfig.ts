import dotenv from "dotenv";
dotenv.config({path: "./.env"})

const envConfig = {
    PORT : process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
    IMAGEKIT_PRIVATE_KEY: process.env.IMAGEKIT_PRIVATE_KEY,
    IMAGEKIT_URL_ENDPOINT: process.env.IMAGEKIT_URL_ENDPOINT,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY!
}

export default envConfig