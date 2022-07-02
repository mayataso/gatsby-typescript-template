import * as React from "react"
import Header from "./header"
import { Global } from "@emotion/react"
import globalStyle from "../styles/global.styles"
import styled from "@emotion/styled"

const Layout: RC.WithChildren = ({ children }) => {
  return (
    <>
      <React.StrictMode>
        <Global styles={globalStyle} />
        <Header siteTitle="Gatsby Template App" />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
        </div>
      </React.StrictMode>
    </>
  )
}

export default Layout
