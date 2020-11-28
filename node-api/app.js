import express from "express";
import cors from "cors";
import { mongoGet } from "./services/mongodbService.js";

const app = express();

app.use(cors())

//number of documents per returned page
const pageSize = 3;

app.get("/getTyres", async (request,response) => {
    const page = request.query.p;
    const searchStr = request.query.q;
//validate page -> must be 1 or more

    const data = await mongoGet(searchStr,page,pageSize)
    response.send(data)
})

app.listen(8080);