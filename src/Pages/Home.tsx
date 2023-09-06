import React, { useEffect, useState } from "react"
import "./ImageScroll.css" // Create a CSS file for styling
import {
  Img,
  Box,
  Text,
  VStack,
  Divider,
  Center,
  Switch,
} from "@chakra-ui/react"
import { PiLightbulbFilamentLight } from "react-icons/pi"
import "./Home.css"

import { GrReactjs } from "react-icons/gr"

const ImageScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    setScrollPosition(window.scrollY)
  }
  console.log(window.scrollY / 800)
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  const dynamicBoxAppearing1 = Math.max(40, 370 - window.scrollY)
  const dynamicBoxAppearing2 = Math.max(40, 870 - window.scrollY)
  const dynamicBoxAppearing3 = Math.max(40, 1070 - window.scrollY)
  const boxAppearing1 = ` ${dynamicBoxAppearing1}px`
  const boxAppearing2 = ` ${dynamicBoxAppearing2}px`
  const boxAppearing3 = ` ${dynamicBoxAppearing3}px`

  const dynamicRortateBox1 = Math.min(90, window.scrollY / 10 - 41)
  const rorateBox1 = `rotate(-${dynamicRortateBox1}deg)`
  const dynamicRortateTop2 = Math.min(90, window.scrollY / 10 - 41)
  const rorateBox2 = `rotate(${dynamicRortateBox1}deg)`

  console.log("dynamicRortateTop1", window.scrollY / 10 - 60)

  const [currentSecond, setCurrentSecond] = useState(new Date().getSeconds())
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSecond(new Date().getSeconds())
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  console.log(currentSecond)
  return (
    <Box width="100%" height="100%" bg="rgb(138,197,202)" marginBottom="10rem">
      <VStack direction="row" h="100px" mr="65rem">
        <VStack mt="0.4rem">
          <Switch size="md" />
        </VStack>
        <Divider
          zIndex="11"
          orientation="vertical"
          borderWidth="3px"
          borderColor="rgb(26,102,160)"
        />
        <Box
          mt="-0.5rem"
          width="20%"
          height="30%"
          borderRadius="80% 80% 0 0 "
          borderColor="red"
          border="3px solid rgb(26,102,160)"
          borderBottom="none"
        >
          <Box transform="rotateX(160deg)" ml="0.94rem" mt="-0.3em">
            {" "}
            <PiLightbulbFilamentLight color="black" fontSize="3rem" />
          </Box>
        </Box>
      </VStack>
      <VStack width="100wh">
        <Img
          mt="6rem"
          width="10rem"
          height="10rem"
          borderRadius="50%"
          marginLeft="50rem"
          src="./PhotoMe.jpeg"
        />
      </VStack>
      <Text ml="4rem" fontSize="3rem" fontFamily="Dancing Script, cursive">
        {" "}
        Farid Huseynli
      </Text>

      <Text ml="52rem" fontSize="2rem">
        Junior Front-end developer
      </Text>
      <Divider
        orientation="horizontal"
        width="15rem"
        borderWidth="3px"
        borderColor="rgb(26,102,160)"
        ml="52rem"
      />

      <Center
        bg="linear-gradient(to bottom , rgb(138,197,202), rgb(13,51,98))"
        display="flex"
        flexDirection="column"
        mt="3rem"
        maxWidth="100%"
        overflowX="hidden"
      >
        {" "}
        <Box
          display="flex"
          flexDirection="row"
          gap={boxAppearing1}
          marginTop={boxAppearing1}
          opacity={window.scrollY / 400}
          overflow-x="hidden"
        >
          <Box width="19rem" height="22rem" bg="red"></Box>
          <Box width="19rem" height="22rem" bg="red"></Box>
          <Box width="19rem" height="22rem" bg="red"></Box>
          <Box width="19rem" height="22rem" bg="red"></Box>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          gap={boxAppearing2}
          marginTop={boxAppearing2}
          opacity={window.scrollY / 900}
          overflow-x="hidden"
        >
          <Box width="19rem" height="22rem" bg="red" marginTop="3rem"></Box>
          <Box width="19rem" height="22rem" bg="red" marginTop="3rem"></Box>
          <Box width="19rem" height="22rem" bg="red" marginTop="3rem"></Box>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          gap={boxAppearing3}
          marginTop={boxAppearing3}
          opacity={window.scrollY / 1300}
          overflow-x="hidden"
        >
          <Box width="19rem" height="22rem" bg="red" marginTop="3rem"></Box>
          <Box width="19rem" height="22rem" bg="red" marginTop="3rem"></Box>
        </Box>
      </Center>

      <Box
        width="100%"
        height="20rem"
        bg="blue"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Box
          bg="white"
          width="40px"
          height="300px"
          transformOrigin="top right"
          transform={rorateBox1}
        ></Box>
        <Box
          bg="white"
          width="40px"
          height="300px"
          transformOrigin="top left"
          transform={rorateBox2}
        ></Box>
      </Box>
    </Box>
  )
}

export default ImageScroll
