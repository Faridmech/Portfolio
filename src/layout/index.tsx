import { Box } from "@chakra-ui/react"

import React from "react"
import { Outlet } from "react-router-dom"
import { Navigations } from "./Navigation"

export const Layout: React.FC = () => {
  return (
    <Box w="100vw" h="100vh">
      <Navigations />
      <Box h="calc(100% - 59px)">
        <Outlet />
      </Box>
    </Box>
  )
}
