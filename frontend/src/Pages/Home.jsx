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
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Box w="100%" h={["auto","auto","80vh"]} overflow={'hidden'}>
        <Image overflow={'hidden'} w="100%" h="100%" src="./heroimage.jpg" alt="heroimage"/>
       </Box>
       <Box mt="10px"><CategoryBoxes  /></Box>
    </div>
  )
}



const CategoryBoxes = () => {
  const categories = ["Music", "Coding", "Design"];
  const [text,setText] = useState("")
  const handleChange = (e) => {
  
    const { checked, value } = e.target;
    if (checked) {
      setText(value);
    }
  };
    console.log(text)
  return (
    <Box 
    display="flex"   
     w="50%"
    h="30px"
    p="30px"
    m="auto"
    gap="20px"
    bg="#d9ecf2"
    borderRadius={"30%"}  
    border="1px solid red"
    justifyContent="center" 
    mt={8}>
<CheckboxGroup colorScheme='blue'  >
  <Stack spacing={[1, 5]} direction={['column', 'row']}>
    <Checkbox value="Music" onChange = {handleChange }  >Music</Checkbox>
    <Checkbox value="Coding" onChange = {handleChange } >Coding</Checkbox>
    <Checkbox value="Design" onChange = {handleChange } >Design</Checkbox>
  </Stack>
</CheckboxGroup>
    </Box>
  );
};

// export default CategoryBoxes;


export default Home
