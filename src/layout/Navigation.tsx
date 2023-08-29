import { Link } from "react-router-dom"

import { Box, HStack, Text, VStack } from "@chakra-ui/react"
import React, { ChangeEvent } from "react"
import { NAVS } from "./const"
import { useIsActiveRoute } from "./hooks"
import { Image } from "@chakra-ui/react"

export const Navigations: React.FC = () => {
  const { checkIsActive } = useIsActiveRoute()

  return (
    <HStack
      zIndex={10}
      w="100%"
      borderRadius="5px"
      p="5px"
      bg="rgb(245,245,245)"
      pos="sticky"
      flexDirection="column"
      alignContent="space-between"
    >
      <Box display="flex" flexDirection="row" gap="15px">
        {NAVS.map((nav) => {
          const isActive = checkIsActive(nav.to)
          return (
            <Link style={{ cursor: "pointer" }} key={nav.to} to={nav.to}>
              <VStack
                fontSize={{ lg: "1.2rem", md: "1rem", sm: "0.9rem" }}
                spacing="0"
                transition="0.2s ease-in"
                color={isActive ? "blue.400" : "rgb(0,59,90)"}
              >
                <Text
                  textUnderlineOffset={5}
                  transition="0.05s ease-in"
                  textDecoration={isActive ? "underline" : "unset"}
                >
                  {nav.name}
                </Text>
              </VStack>
            </Link>
          )
        })}
      </Box>
    </HStack>
  )
}
