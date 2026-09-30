import express from "express";
import envConfig from "./src/config/envConfig.ts"
import authRouter from "./src/routes/routes.auth.ts"
import teamRouter from "./src/routes/routes.team.ts"
import organizationRouter from "./src/routes/routes.organization.ts"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express()

app.use(cors())

/* MIDDLEWARES */
app.use(express.json())
app.use(cookieParser())

/* ROUTERS */
app.use("/api/v1/users", authRouter);
app.use("/api/v1/teams", teamRouter);
app.use("/api/v1/organizations", organizationRouter);

app.get("/", (req, res) => {
     res.send({message: "D-Bug is live"})
})

app.listen(envConfig.PORT || 8000, () => {
    console.log(`D_bug server is live on ${envConfig.PORT}`)
})

export default app