import React, { useEffect, useState } from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import {FaHome,FaSignInAlt} from "react-icons/fa"
import {FcAbout,FcContacts} from "react-icons/fc"
import { Box, Flex, Img, Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [size, setSize] = useState(window.innerWidth);
    const updateSize = () => setSize(window.innerWidth);
    useEffect(() => (window.onresize = updateSize), []);


  return (
    <>  
        <Flex w="100%" h="70px" position="sticky" top="0px" justify="space-between" align="center" boxShadow='md' p='6' rounded='md' bg='white' >
            {
                size>600 ? <>
                <Flex w="130px" h="60px"><Img src="/bloglogo.png" objectFit="cover" alt="logo" w="100%" h="100%" /></Flex>
                <Flex w={["70%","60%","40%"]} justify="space-between" align="center">
                <Link to="/">Home</Link> 
                <Link to="/contact">Contact</Link> 
                <Link to="/About">About</Link> 
                <Link to="/account" >SignUp</Link>
                </Flex></> :<Flex w="100%" h="70px"  position="sticky" top="0px"  justify="space-between" align="center" boxShadow='none' p='0' rounded='md' bg='white'>
                <Flex w="120px" h="60px"><Img src="/bloglogo.png" objectFit="cover" alt="logo" w="100%" h="100%" /></Flex>
                <Flex w={["5%"]} justify="space-between" align="center">
                 <Mobile/>
                </Flex>    
                </Flex>
            }
        
        </Flex>
    </>
  )
}

const Mobile = ()=>{
  return(
  <Menu>
  <MenuButton as={IconButton} variant="unstyled">
 {<GiHamburgerMenu fontSize={"20px"} />}
  </MenuButton>
  <MenuList>
    <Link to="/" ><MenuItem icon={<FaHome />}>Home</MenuItem></Link>
    <Link to= "/about" ><MenuItem icon = {<FcAbout/>}>About</MenuItem></Link>
    <Link to="/contact" ><MenuItem icon ={<FcContacts />}>Contact</MenuItem></Link>
    <Link to="/account" ><MenuItem icon = {<FaSignInAlt/>}>Sign In</MenuItem></Link>
  </MenuList>
</Menu>
  )
}

export default Navbar

