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
  const dynamicMarginTop1 = Math.max(40, 370 - window.scrollY)
  const dynamicMarginTop2 = Math.max(40, 870 - window.scrollY)
  const dynamicMarginTop3 = Math.max(40, 1070 - window.scrollY)
  const marginTop1 = ` ${dynamicMarginTop1}px`
  const marginTop2 = ` ${dynamicMarginTop2}px`
  const marginTop3 = ` ${dynamicMarginTop3}px`

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
      >
        {" "}
        <Box
          display="flex"
          flexDirection="row"
          gap={marginTop1}
          marginTop={marginTop1}
          opacity={window.scrollY / 400}
        >
          <Box width="19rem" height="22rem" bg="red"></Box>
          <Box width="19rem" height="22rem" bg="red"></Box>
          <Box width="19rem" height="22rem" bg="red"></Box>
          <Box width="19rem" height="22rem" bg="red"></Box>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          gap={marginTop2}
          marginTop={marginTop2}
          opacity={window.scrollY / 900}
        >
          <Box width="19rem" height="22rem" bg="red" marginTop="3rem"></Box>
          <Box width="19rem" height="22rem" bg="red" marginTop="3rem"></Box>
          <Box width="19rem" height="22rem" bg="red" marginTop="3rem"></Box>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          gap={marginTop2}
          marginTop={marginTop2}
          opacity={window.scrollY / 1100}
        >
          <Box width="19rem" height="22rem" bg="red" marginTop="3rem"></Box>
          <Box width="19rem" height="22rem" bg="red" marginTop="3rem"></Box>
        </Box>
      </Center>
    </Box>
  )
}

export default ImageScroll
