import { Center, Flex } from "@chakra-ui/react"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"

const IndexPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      lagar: file(relativePath: { eq: "lagar.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 200
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 50
          )
        }
      }
    }
  `)
  const image = getImage(data.lagar.childImageSharp)
  const Hello = styled.span`
    font-size: 1.2rem;
  `

  return (
    <>
      <Center>
        {image && <GatsbyImage alt="らがーだよ。" image={image} />}
        <Hello>{"< "}Hi there.</Hello>
      </Center>
    </>
  )
}

export default IndexPage
