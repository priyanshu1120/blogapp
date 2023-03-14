import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Button, Avatar, Flex, IconButton, Box, Heading, Image, Text, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import {BsThreeDotsVertical} from "react-icons/bs"
import {BiLike ,BiChat, BiShare} from "react-icons/bi"
import { reduceString } from '../Utils/CommonUtils'
import {MdDelete,MdEditNote} from "react-icons/md"
import { Link } from 'react-router-dom'


const GetBlog = ({blog}) => {

  return (
    <Card maxW='md' ml="10px" mr="10px"  position="none" boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;">
    <CardHeader>
      <Flex spacing='4'>
        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
          <Avatar name={blog.username} src='https://picsum.photos/200/300' position="none"/>
  
          <Box>
            <Heading size='sm'>{blog.username}</Heading>
            <Text>{blog.categories[0]} Blog</Text>
          </Box>
        </Flex>
        <IconButton
          variant='unstyled'
          colorScheme='gray'
          aria-label='See menu'
          icon={<Dotmenu  />}
          position="none"
        />
      </Flex>
    </CardHeader>
    <CardBody>
      <Text>
       { reduceString(blog.description)}
      </Text>
    </CardBody>
    <Image
      objectFit='cover'
      src={blog.picture ?blog.picture :"https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" }
      alt="image"
      h="150px"
    />
  
    <CardFooter
      w="100%"
      justify='space-between'
      sx={{
        '& > button': {
          minW: '80px',
        },
      }}
     
    >
      <Button flex='1' variant='ghost' leftIcon={<BiLike />}  position="none">
        Like
      </Button>
      <Link to={`blog/${blog._id}`}><Button flex='1' variant='ghost' leftIcon={<BiChat />}  position="none">
        Details View
      </Button></Link>
    </CardFooter>
  </Card>
  )
}

const Dotmenu = ()=>{
    return (
    <Menu >
  <MenuButton as={IconButton} position="none" variant="unstyled">{<BsThreeDotsVertical  />}</MenuButton>
  <MenuList position="center">
    <MenuItem icon ={<MdDelete fontSize="18px"/>}>Delete</MenuItem>
    <MenuItem icon = {<MdEditNote fontSize="18px"/>}>Edit</MenuItem>
  </MenuList>
   </Menu>
    )
}

export default GetBlog
