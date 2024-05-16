import * as React from "react"
import CardComponentRecepies from "../components/CardComponentRecepies"
import { Box, Card, Container, Stack, Typography } from "@mui/material"
import Image from "mui-image"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const RecepiesApp = ({ data }) => {
  // Function to sort weekdays.
  const sortingFunction = (a, b) => {
    // Weekdays in Swedish
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

    // Get the weekday from a and b
    const dayA = a.node.day
    const dayB = b.node.day

    // Get the index for a and b in the weekdays array
    const indexA = weekdays.indexOf(dayA)
    const indexB = weekdays.indexOf(dayB)

    // Compare indexes to sort
    if (indexA < indexB) {
      return -1
    }
    if (indexA > indexB) {
      return 1
    }
    return 0
  }

  const sortedPosts = data.allContentfulMenyV1.edges.sort(sortingFunction)

  return (
    <Layout>
      <Container>
        <Card
          variant="none"
          sx={{
            my: 2,
          }}
        >
          <Stack alignItems="center" my={2}>
            <Typography variant="h5" mb={4}>
              Meny vecka 20
            </Typography>
            {sortedPosts.map(edge => (
              <Stack
                key={edge.node.dag}
                direction={{ xs: "column", md: "row" }}
                gap={4}
              >
                <Stack
                  alignItems="center"
                  border="solid 1px silver"
                  p={1}
                  gap={1}
                  width="200px"
                >
                  <Typography variant="h6">{edge.node.dag}</Typography>
                  <Typography variant="h8">{edge.node.rtt}</Typography>
                  {/* Rendera andra värden här */}

                  <Image src={edge.node.bild.file.url} width={100} />
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Card>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    allContentfulMenyV1 {
      edges {
        node {
          rtt
          dag
          bild {
            file {
              url
            }
          }
          ingredienser {
            raw
          }
          lnk
          grSHr {
            raw
          }
        }
      }
    }
  }
`

export default RecepiesApp
