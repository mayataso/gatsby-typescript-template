import * as React from "react"
import Header from "./header"
import styled from "@emotion/styled"

const Layout: RC.WithChildren = ({ children }) => {
  const Main = styled.main`
    max-width: 960px;
    margin: 0 auto;
  `
  return (
    <>
      <Header siteTitle="Gatsby Template App" />
      <Main>{children}</Main>
    </>
  )
}

export default Layout
