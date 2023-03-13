import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CategoryBoxes = () => {
   const categoryArr = ["Music","Coding","Sports"]

    return (
      <Box 
      display="flex"   
       w={["95%","80%","50%","50%"]}
      h={["40px","30px"]}
      p={["15px","15px","20px","30px"]}
      m="auto"
      gap={["20px"]}
      bg="#d9ecf2"
      borderRadius={["0%","30%"]}  
      justifyContent="center" 
      alignItems={"center"}
      mt={8}>
          <Link to="/">All</Link>
          {categoryArr?.map((type,i)=>(
                <Link key={i} to={`?category=${type}`}>{type}</Link>
          ))}
      </Box>
    );
  };

  export default CategoryBoxes