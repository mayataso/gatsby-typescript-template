import * as React from "react"
import styled from "@emotion/styled"
import { Heading } from "@chakra-ui/react"

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
      <Heading>{siteTitle}</Heading>
    </Header>
  )
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
