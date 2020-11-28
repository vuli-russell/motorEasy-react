import mongodb from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const connectionString = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@cluster0.ihwqc.mongodb.net?retryWrites=true&w=majority`;

const mongoClient = mongodb.MongoClient;

export const mongoGet = async(searchStr,page) => {
    const client = await mongoClient.connect(connectionString, { useUnifiedTopology: true })
    const cursor = await client.db("motorEasyTechTest").collection("tyres").find({title: new RegExp(searchStr,"i")}).toArray()
    return cursor
}