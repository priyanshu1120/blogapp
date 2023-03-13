import bcrypt from "bcrypt";
import express from "express";
import userModel from "../model/user.model.js";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { tokenModel } from "../model/token.model.js";

dotenv.config()

const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  let userPresent = await userModel.findOne({ email });
  if (userPresent) {
    res.status(401).send({ msg: "email already exits try with another..." });
  } else {
    try {
      bcrypt.hash(password, 10, async function (err, hash) {
        let userData = new userModel({ name, email, password: hash });
        await userData.save();
        res.status(200).send({ msg: "account created successfully" });
      });
    } catch (err) {
      console.log("something error ", err);
      res.status(500).send({ msg: "somthing went wrong in signup" });
    }
  }
});


userRouter.post("/login",async(req,res)=>{
     let user = await userModel.findOne({email:req.body.email}) 
      if(!user){
        res.status(400).send({msg:"user does not exits try to signup..."})
      }else{
          try{
            let verifypasssword = await bcrypt.compare(req.body.password,user.password)
           if(verifypasssword){
              const accessToken = jwt.sign(user.toJSON(),process.env.ACCESS_TOKEN_KEY,{expiresIn :"15m"})
              const refreshToken = jwt.sign(user.toJSON(),process.env.REFRESH_TOKEN_KEY)
              const validtoken = new tokenModel({token:refreshToken})
              await validtoken.save()
               res.status(200).send({accessToken :accessToken , refreshToken : refreshToken , name : user.name,email:user.email })
           }else{
            res.status(400).send({msg : "password does not exits" }) 
           }
          }catch(err){
             console.log(err)
            res.status(500).send({msg : "something went wrong in login" }) 
          }

      }
})

export default userRouter;
