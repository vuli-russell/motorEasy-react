import mongodb from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const connectionString = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@cluster0.ihwqc.mongodb.net?retryWrites=true&w=majority`;

const mongoClient = mongodb.MongoClient;

export const mongoGet = async(searchStr,page,pageSize) => {
    try {
        const client = await mongoClient.connect(connectionString, { useUnifiedTopology: true })
        const response = await client.db("motorEasyTechTest").collection("tyres")
            .find({$or:
                [
                    {title: new RegExp(searchStr,"i")},
                    {size: new RegExp(searchStr,"i")}
                ]
            })
            //should be a sort here to ensure same order each time
            .skip((page-1)*pageSize)
            .limit(3)
            .toArray()
            await client.close()
            return response
    } catch(e){
        console.log(e)
        return "ServerError"
    }
}