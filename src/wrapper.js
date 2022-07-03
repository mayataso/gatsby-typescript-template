import React from "react"
import Layout from "./components/layout"
import { Global } from "@emotion/react"
import globalStyle from "./styles/global.styles"
import { Helmet } from "react-helmet"
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react"
import Seo from "./components/seo"

export const wrapPageElement = ({ element, props }) => {
  return (
    <React.StrictMode>
      <Seo title="Home" />
      <Global styles={globalStyle} />
      <Layout {...props}>{element}</Layout>
    </React.StrictMode>
  )
}

export const wrapRootElement = ({ element }) => {
  return <ChakraProvider>{element}</ChakraProvider>
}
