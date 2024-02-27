"use client"

import dynamic from "next/dynamic"
import Providers from "./providers"
import { Box } from "@chakra-ui/react"
import Info from "./info"
const Map = dynamic(() => import('./map'), {ssr: false})

export default function App() {
  return (
    <main>
      <Providers>
        <Box w="100vw" h="100vh" display={{ md: "flex" }}>
          <Box width={{ base: "100%", md: "40%" }} height={{ base: "40%", md: "100%" }}>
            <Map />
          </Box>
          <Box width={{ base: "100%", md: "60%" }} height={{ base: "60%", md: "100%" }}>
            <Info />
          </Box>
        </Box>
      </Providers>
    </main>
  )
}
