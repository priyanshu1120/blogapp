import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export const authenticateToken = (req,res,next)=>{
       const authHeader = req.headers["authorization"]
 
       const token = authHeader && authHeader.split(" ")[1]
       if(token == null){
        res.status(401).send({msg:"you are not authenticated header does not exits"})
       }
       else{
        jwt.verify(token,process.env.ACCESS_TOKEN_KEY,(err,user)=>{
              if(err){
                   res.status(403).send({msg:"invalid token"})
              }
              req.user = user
              next()
        })
       }
}