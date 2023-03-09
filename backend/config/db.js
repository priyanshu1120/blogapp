import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
mongoose.set("strictQuery",false)

 const connect = mongoose.connect(process.env.MONGOURL)

 export default connect
