import express from "express";
import cors from "cors";

const app = express();

app.use(cors())

app.get("/getTyres",(request,response) => {
    const page = request.query.p;
    const searchStr = request.query.q;

    response.send(`${searchStr}, ${page}`)
})

app.listen(8080);