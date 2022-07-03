import styled from "@emotion/styled"
import { graphql, PageProps, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { IGatsbyImageDataParent } from "gatsby-plugin-image/dist/src/components/hooks"
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

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
  console.log(data)

  const image = getImage(data.lagar.childImageSharp)

  const Content = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `

  const Hello = styled.span`
    font-size: 1.2rem;
  `

  return (
    <Layout>
      <Seo title="Home" />
      <Content>
        {image && <GatsbyImage alt="らがーだよ。" image={image} />}
        <Hello>{"< "}Hi there.</Hello>
      </Content>
    </Layout>
  )
}

export default IndexPage
