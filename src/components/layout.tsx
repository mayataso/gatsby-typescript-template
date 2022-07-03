import * as React from "react"
import Header from "./header"
import { Global } from "@emotion/react"
import globalStyle from "../styles/global.styles"
import styled from "@emotion/styled"
import { Helmet } from "react-helmet"

const Layout: RC.WithChildren = ({ children }) => {
  const Main = styled.main`
    max-width: 960px;
    margin: 0 auto;
  `
  return (
    <>
      <React.StrictMode>
        <Helmet>
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        </Helmet>
        <Global styles={globalStyle} />
        <Header siteTitle="Gatsby Template App" />
        <Main>{children}</Main>
      </React.StrictMode>
    </>
  )
}

export default Layout
