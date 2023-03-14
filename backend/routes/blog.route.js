import  express  from "express";
import { blogModel } from "../model/blog.model.js";
const blogRoute = express.Router()

blogRoute.post("/create",async(req,res)=>{
       
    try{
         const title = await blogModel.findOne({title:req.body.title})
     
         if(!title){
            const data = new blogModel(req.body)
            await data.save()
           res.status(200).send({msg:"blog created successfully"})
         }else{
            res.status(403).send({msg:"Try with unique Title"})
         }
     
    }catch(err){
          res.status(500).send({msg:"somthing went wrong in post request"})
    }

})


blogRoute.get("/",async(req,res)=>{
   let category = req.query.category

    let data;
    try{
        
         if(category){
             data= await blogModel.find({categories:category})
         }else{
             data= await blogModel.find({})
          
         }
         res.status(200).send(data)
    }catch(err){
          res.status(500).send({msg:"somthing went wrong in get request"})
    }

})

export {blogRoute}
