import ImageKit from "@imagekit/nodejs";
import envConfig from "./envConfig";

const imagekitclient = new ImageKit({
    
    privateKey: envConfig.IMAGEKIT_PRIVATE_KEY,
    baseURL: envConfig.IMAGEKIT_URL_ENDPOINT
})

export default imagekitclient