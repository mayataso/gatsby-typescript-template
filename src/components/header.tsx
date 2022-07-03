import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "@emotion/styled"

type Props = {
  siteTitle: string
}

const Header: RC.WithoutChildren<Props> = ({ siteTitle }) => {
  const Header = styled.header`
    margin: 0 auto;
    padding: 30px 0;
    max-width: 960px;
    text-align: center;
  `
  return (
    <Header>
      <h1>{siteTitle}</h1>
    </Header>
  )
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
