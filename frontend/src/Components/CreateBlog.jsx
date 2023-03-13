import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Img,
  Text,
  Button,
  Textarea,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { AiFillPicture } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { dataContext } from "../Context/DataProvider";
import { API } from "../Services/Api";
import axios from "axios";


const initialPost = {
  title: "",
  description: "",
  picture: "",
  username: "",
  categories: "",
  createdDate: new Date(),
};
const CreateBlog = () => {
  const [post, setPost] = useState(initialPost);
  const [file, setFile] = useState("");
  const location = useLocation()
  const {account} = useContext(dataContext)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({...post,[name]:value})
  };

  useEffect(()=>{
    const getImage = async()=>{
        if(file){
           const formData = new FormData();
           formData.append("name", file.name);
           formData.append("file", file);
           let res = await axios.post("http://localhost:7500/fileupload",formData)
           console.log(res.data)
           post.picture = res.data
        }
       
   }
   getImage()

   post.categories = location.search?.split("=")[1] || "All"
   post.username = account.name
  },[file])


  return (
    <Box>
      <Navbar />
      <Box
        w="100%"
        pl={["0px", "60px", "90px", "160px"]}
        pr={["0px", "80px", "100px", "160px"]}
      >
        <Box position={"relative"} zIndex="-1">
          <Img
            src={post.picture?post.picture:"./coverimg.jpg"}
            alt="img"
            w="100%"
            h="60vh"
            objectFit={"cover"}
          />
          <Text
            position="absolute"
            top={["65%", "70%", "75%", "85%"]}
            left="50%"
            fontSize={["14px", "16px", "18px", "28px"]}
            transform={"translate(-50%,-50%)"}
          >
            Choose your blog image
          </Text>
        </Box>
        <FormControl m="10px" display="flex" alignItems={"center"}>
          <FormLabel htmlFor="inputfile">
            <AiFillPicture fontSize={"28px"} cursor="pointer" />
          </FormLabel>
          <Input
            type="file"
            id="inputfile"
            display={"none"}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Input
            type="text"
            variant="unstyled"
            placeholder="Title"
            fontSize={["16px", "20px"]}
            onChange={handleChange}
            name="title"
          />
          <Button
            colorScheme={"blue"}
            display="block"
            mr={["20px", "10px", "20px"]}
            pr={["50px", "30px"]}
          >
            Publish
          </Button>
        </FormControl>
        <Textarea
          m="10px"
          w="95%"
          placeholder="Type your Story..."
          variant="unstyled"
          name="description"
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
};

export default CreateBlog;
