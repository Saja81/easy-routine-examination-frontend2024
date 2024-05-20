import React from "react"
import { graphql, Link } from "gatsby"
// import { Helmet } from "react-helmet";
import Layout from "../components/Layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Container, Stack, Typography } from "@mui/material"

const MenyPost = ({ data }) => {
  const { dag, ingredienser, rtt, grSHr, lnk } = data.contentfulMenyV2 // Hämta data för den specifika menyposten

  return (
    <>
      {/* <Helmet> */}
      <title>{dag} - Din Sida Titel Här</title>
      {/* Lägg till eventuella meta-tagg beskrivningar eller andra SEO-relaterade taggar här */}
      {/* </Helmet> */}
      <Layout>
        <Container>
          <Stack>
            <Typography variant="h6">
              {dag} - {rtt}
            </Typography>

            <Typography variant="h7" sx={{ textDecoration: "underline" }}>
              Ingredienser
            </Typography>
            <Typography>
              {documentToReactComponents(JSON.parse(ingredienser.raw))}
            </Typography>
            <Typography variant="h7" sx={{ textDecoration: "underline" }}>
              Gör så här
            </Typography>
            <Typography>
              {documentToReactComponents(JSON.parse(grSHr.raw))}
            </Typography>
            <Link to={lnk} target="_blank" rel="noopener noreferrer">
              <Typography>
                Recept inklusive bilder kommer från köket.se
              </Typography>
            </Link>
          </Stack>
        </Container>
      </Layout>
    </>
  )
}

export const query = graphql`
  query ($slug: String!) {
    contentfulMenyV2(slug: { eq: $slug }) {
      dag
      rtt
      ingredienser {
        raw
      }
      grSHr {
        raw
      }
      slug
    }
  }
`

export default MenyPost
