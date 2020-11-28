import express from "express";
import cors from "cors";
import { mongoGet } from "./services/mongodbService.js";

const app = express();

app.use(cors())

//number of documents per returned page
const pageSize = 3;

app.get("/getTyres", async (request,response) => {
    let page = parseInt(request.query.p);
    const searchStr = request.query.q;
    if(page){
        const data = await mongoGet(searchStr,page,pageSize)
        if(data==="ServerError"){
            response.status(500).send("Error retriving data from database")
        }else{
            response.send(data)
        }
    }else{
        response.status(400).send("p (page) query parameter must be a parseable as an integer greater than 1")
    }
    
})

app.listen(8080);