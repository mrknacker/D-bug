import express from "express";
import { githubOAuthLoginController } from "../controllers/oauth.controller";
import envConfig from "../config/envConfig";

const GithubOAuthRouter = express.Router()
const redirectURL = `${envConfig.REDIRECT_URL}`

// get Access Token

GithubOAuthRouter.get("/callback", async (req, res) => {

    try{
    const code = req.query.code;

    if(!code){
       return res.status(404).json({message: "Github Oauth Code is missing"})
    }

    const queryParams = "client_id=" + envConfig.GITHUB_OAUTH_CLIENT_ID + "&client_secret=" + envConfig.GITHUB_OAUTH_CLIENT_SECRET
                           + "&code=" + code + "&redirect_uri=" + redirectURL
    
    const response = await fetch("https://github.com/login/oauth/access_token", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: queryParams
    })

    if(!response.ok){
        return res.status(502).json({
            message: "Failed to communicate with Githubs"
        })
    }

    const data = await response.json()

    if(data.error){
        return res.status(400).json({
            message: {
                error: data.error,
                error_description: data.error_description
            }
        })
    }

    return res.json(data)

    }catch(error){
        return res.status(500).json({
            message: "An error occurred during Github OAuth"
        })
    }

})

// get User Data
GithubOAuthRouter.get("/getUserData", async (req, res) => {

    // getting accessToken from Auth headers
    const accessToken = req.get("Authorization")

    console.log("Auth Header", req.get("Authorization"))

    await fetch("https://api.github.com/user", {
        method: "GET",
        headers: {
            "Authorization" : `Bearer ${accessToken}`
        }
    }).then(response => response.json()).then(data => res.json(data))

})

export default GithubOAuthRouter
