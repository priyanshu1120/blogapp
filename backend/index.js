import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connect from "./config/db.js"
import userRouter  from "./routes/user.route.js"
import { fileRoute } from "./routes/fileUpload.route.js"
import uploads from "./utils/uploads.js"


const app = express()
dotenv.config()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
     console.log(res.send("server run successfully"))
})
app.use("/user",userRouter)
app.use("/fileupload",uploads.single("file"),fileRoute)
app.use("/fileupload",fileRoute)


app.listen(process.env.PORT,async()=>{
     try{
          await connect
          console.log(`server run on http://localhost:${process.env.PORT}`)
       
     }catch(err){
          console.log(err)
          console.log(`something error in port`)   
     }
    
})