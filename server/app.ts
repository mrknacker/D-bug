import express from "express";
import envConfig from "./src/config/envConfig.ts"
import teamRouter from "./src/routes/routes.team.ts"
import cors from "cors"

const app = express()

app.use(cors())

/* MIDDLEWARES */
app.use(express.json())


/* ROUTERS */
app.use("/teams", teamRouter);

app.get("/", (req, res) => {
     res.send({message: "D-Bug is live"})
})

app.listen(envConfig.PORT || 8000, () => {
    console.log(`D_bug server is live on ${envConfig.PORT}`)
})

export default app