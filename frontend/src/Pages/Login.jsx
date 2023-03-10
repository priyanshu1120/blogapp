import React, { useContext, useState } from "react";
import { Box, Heading, HStack, Img, Input, Text } from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../Services/Api.js";
import { useToast } from "@chakra-ui/react";
import { dataContext } from "../Context/DataProvider.jsx";



const signupObj = {
  name: "",
  email: "",
  password: "",
};

const loginObj = {
  email: "",
  password: "",
};
const Login = () => {
  const [show, setShow] = useState(false);
  const toast = useToast();
  const [text, setText] = useState(signupObj);
  const [login, setLogin] = useState(loginObj);
  const navigate = useNavigate();
  const {setAccount,setAuth} = useContext(dataContext)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  };

  const handleLogin = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

    /* --------------------------------signup functionality --------------------------*/
  const handleSubmit = async () => {
    if (text.name != "" && text.email != "" && text.password != "") {
      try {
        let res = await API.userSignup(text);
        console.log(res)
        if (res.isSuccess) {
          setShow(true);
          toast({
            title: "Account created.",
            description: `${res.data.msg}`,
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
    
          setText({ ...text, name: "", email: "", password: "" });
        } else if (res.isFailure) {
          toast({
            title: "Error.",
            description: `${res.msg}`,
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
          setText({ ...text, name: "", email: "", password: "" });
        }
      } catch (err) {
        console.log(err);
        if (err.isError) {
          toast({
            title: "Error.",
            description: `${err.msg}`,
            status: "error",
            duration: 2000,
            isClosable: true,
            position: "top",
          });
        }
      }
    } else {
      alert("All fields are required");
    }
  };

  /* --------------------------------login functionality --------------------------*/
  const LoginSubmit = async () => {
    try {
      let res = await API.userLogin(login);
      if (res.isSuccess) {
        toast({
          title: "Login Successfull.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        sessionStorage.setItem("accesstoken",`Barrer ${res.data.accessToken}`)
        sessionStorage.setItem("refreshtoken",`Barrer ${res.data.refreshToken}`)
        setAccount({name:res.data.name,email:res.data.email})
        setLogin({ ...login, email: "", password: ""});
        setAuth(true)
        navigate("/");

      }
    } catch (err) {
      alert("password does not match");
    }
  };

  return (
    <Box
      w="100vw"
      h="100vh"
      backgroundImage="url('https://wallpaperaccess.com/full/2314983.jpg')"
      backgroundRepeat="no-repeat"
      objectFit="cover"
      opacity="1"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        w={["100%", "90%", "60%", "45%"]}
        h="60%"
        p={["5px", "20px", "20px"]}
      >
        {show ? (
          <Heading textAlign="center" color="white">
            Login
          </Heading>
        ) : (
          <Heading textAlign="center" color="white">
            Signup
          </Heading>
        )}

        {!show ? (
          <HStack
            w={["95%", "90%", "80%", "60%"]}
            h="50px"
            p="15px"
            bg="#4756b3"
            m="auto"
            mt="30px"
            boxShadow="md"
          >
            <FaUserAlt color="white" fontSize="20px" />
            <Input
              variant="unstyled"
              placeholder="User Name"
              color="white"
              pl="5px"
              _placeholder={{ color: "white" }}
              onChange={show ? handleLogin : handleChange}
              value={text.name}
              name="name"
            />
          </HStack>
        ) : (
          <Box></Box>
        )}

        <HStack
          w={["95%", "90%", "80%", "60%"]}
          h="50px"
          p="15px"
          bg="#4756b3"
          m="auto"
          mt="20px"
          boxShadow="md"
        >
          <MdEmail color="white" fontSize="20px" />
          <Input
            variant="unstyled"
            placeholder="Email"
            color="white"
            pl="5px"
            _placeholder={{ color: "white" }}
            onChange={show ? handleLogin : handleChange}
            type="email"
            value={show ? login.email : text.email}
            name="email"
          />
        </HStack>

        <HStack
          w={["95%", "90%", "80%", "60%"]}
          h="50px"
          p="15px"
          bg="#4756b3"
          m="auto"
          mt="20px"
          boxShadow="md"
        >
          <FaLock color="white" fontSize="20px" />
          <Input
            variant="unstyled"
            placeholder="Passoword"
            color="white"
            type="password"
            pl="5px"
            _placeholder={{ color: "white" }}
            onChange={show ? handleLogin : handleChange}
            value={show ? login.password : text.password}
            name="password"
          />
        </HStack>
        <Box
          w={["95%", "90%", "80%", "60%"]}
          border="1px solid white"
          h="50px"
          p="15px"
          m="auto"
          mt="20px"
          boxShadow="md"
          borderRadius="50px"
          cursor="pointer"
          _hover={{ background: "#4756b3" }}
        >
          <Input
            type="submit"
            variant="unstyled"
            color="white"
            cursor="pointer"
            onClick={show ? LoginSubmit : handleSubmit}
          />
        </Box>
        <Box w={["95%", "90%", "80%", "60%"]} m="auto" mt="10px">
          <Text align="center" color="white">
            {!show ? "Already have an account ?" : "Don't Have account ?"}
            <Text
              display="inline-block"
              onClick={() => setShow(!show)}
              cursor="pointer"
              color="blue"
            >
              {show ? "Signup" : "Login"}
            </Text>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
