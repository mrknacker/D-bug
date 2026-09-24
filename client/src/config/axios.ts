import axios from "axios"
import config from "./envConfig"

const api = axios.create({
    baseURL: config.baseURL,
    timeout: 10000,
})

export default api