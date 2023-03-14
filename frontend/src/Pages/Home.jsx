import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Stack,
  Image,
  Center,
  CheckboxGroup,
  Checkbox,
  SimpleGrid
} from "@chakra-ui/react";
import { Link, useSearchParams } from "react-router-dom";
import CategoryBoxes from '../Components/CategoryBoxes';
import GetBlog from '../Components/GetBlog';
import { API } from '../Services/Api';

const Home = () => {
  const [searchParams] = useSearchParams()
  const category = searchParams.get("category")
  const [blog,setBlog] = useState([])
 

  useEffect(()=>{
    const getBlogData = async()=>{
      let res = await API.getBlog({ category:category || "" })
      console.log(res)
      setBlog(res.data)
  }
     getBlogData()    
  },[category])

  console.log(blog)

  return (
    <div>
        <Navbar/>
        <Box w="100%" h={["auto","auto","80vh"]} overflow={'hidden'}>
        <Image overflow={'hidden'} w="100%" h="100%" src="./heroimage.jpg" alt="heroimage"/>
       </Box>
       <Box mt="10px"><CategoryBoxes  /></Box>
       <Link to={`/create?category=${category || ""}`}><Button display="block" margin="auto" mt="10px" colorScheme={"blue"} position="none">Create Blog</Button></Link>
       
       <SimpleGrid columns={[1,2,3,3]} spacing='20px' mt="30px">
       { blog.length>0 && blog.map((item)=>(<GetBlog blog = {item} />)) } 
       </SimpleGrid>
  
    </div>
  )
}


export default Home
