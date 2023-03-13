import multer from  "multer"
import {GridFsStorage} from "multer-gridfs-storage"
import dotenv from "dotenv"

dotenv.config()

const storage = new GridFsStorage({
     url : process.env.MongoUrl,
     file:(req,file)=>{
        
      const fileType = ["image/jpg","image/png","image/jpeg"]
   
       if(fileType.indexOf(file.memeType === -1 )){
          return`${Date.now()}-blog-${file.originalname}`;
       }
        return {
            bucketName :"photos",
            fileName :`${Date.now()}-blog-${file.originalname}`
        }
        
     }

})

export default multer({storage})
