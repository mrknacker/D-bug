import envConfig from "../config/envConfig.ts"

const GITHUB_OAUTH_CLIENT_ID: string = envConfig.GITHUB_OAUTH_CLIENT_ID


export function loginWithGoogle(){

    globalThis.window.location.href = `https://accounts.google.com/o/oauth2/v2/auth`
                                        
} 

export function loginWithGithub(){

    globalThis.window.location.href = `https://github.com/login/oauth/authorize?` + "client_id="+ GITHUB_OAUTH_CLIENT_ID 
    
} 


