import mongoose from "mongoose"
import { configDotenv } from "dotenv"
configDotenv()
const connectDatabase =() =>{
    try{
        mongoose.connect(process.env.MONGO_URI)
        .then(()=> {
            console.log("database connected")
        })
    }catch(error){
        console.log(error,"db error")
    } 
    }
export default connectDatabase