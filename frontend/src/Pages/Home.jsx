import React, { useState } from 'react'
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
  Checkbox
} from "@chakra-ui/react";
import { Link, useSearchParams } from "react-router-dom";
import CategoryBoxes from '../Components/CategoryBoxes';

const Home = () => {
  const [searchParams] = useSearchParams()
 const category = searchParams.get("category")

  return (
    <div>
        <Navbar/>
        <Box w="100%" h={["auto","auto","80vh"]} overflow={'hidden'}>
        <Image overflow={'hidden'} w="100%" h="100%" src="./heroimage.jpg" alt="heroimage"/>
       </Box>
       <Box mt="10px"><CategoryBoxes  /></Box>
       <Link to={`/create?category=${category || ""}`}><Button display="block" margin="auto" mt="10px" colorScheme={"blue"}>Create Blog</Button></Link>
    </div>
  )
}


export default Home
