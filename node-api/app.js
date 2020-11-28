import express from "express";
import cors from "cors";
import { mongoGet } from "./services/mongodbService.js";

const app = express();

app.use(cors())

app.get("/getTyres", async (request,response) => {
    const page = request.query.p;
    const searchStr = request.query.q;
    
    const data = await mongoGet(searchStr)
    response.send(data)
})

app.listen(8080);