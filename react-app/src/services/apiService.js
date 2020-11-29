import axios from "axios";
import dotenv from "dotenv";

dotenv.config()

export const getTyres = async (searchStr,page=1) => {
    try{
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/getTyres?q=${searchStr}&p=${page}`)
        if(response.status===200){
            return response.data;
        }else {
            return "error"
        }
    } catch(e){
        return "error"
    }

}
