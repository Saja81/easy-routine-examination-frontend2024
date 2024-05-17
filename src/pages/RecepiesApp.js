import * as React from "react"
import { Box, Card, Container, Grid, Stack, Typography } from "@mui/material"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { sortingFunction, getCurrentWeekInfo } from "../utils/utils"
import Week1 from "../components/MenuWeekOne"
import Week2 from "../components/MenuWeekTwo"
import Week3 from "../components/MenuWeekThree"
import Week4 from "../components/MenuWeekFour"

const RecepiesApp = ({ data }) => {
  const { dayOfWeek, weekNumber, weekDays, weekDayName } = getCurrentWeekInfo()

  console.log("Veckodag: ", weekDayName)
  console.log("Veckodag: ", dayOfWeek)
  console.log("Veckonummer: ", weekNumber)

  return (
    <Layout>
      <Container>
        <Card
          variant="none"
          sx={{
            textAlign: "center",
            my: 2,
          }}
        >
          <Typography variant="h5" mb={4}>
            Meny vecka {weekNumber}
          </Typography>
          <Week1 />
          {/* <Week2 />
          <Week3 />
          <Week4 /> */}
        </Card>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query MyCombinedQuery {
    menyV1: allContentfulMenyV1 {
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
    menyV2: allContentfulMenyV2 {
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
    menyV3: allContentfulMenyV3 {
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
    menyV4: allContentfulMenyV4 {
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
