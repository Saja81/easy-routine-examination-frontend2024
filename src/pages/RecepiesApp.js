import * as React from "react"
import { Box, Card, Container, Grid, Stack, Typography } from "@mui/material"

import Layout from "../components/Layout"
import { graphql } from "gatsby"

const RecepiesApp = ({ data }) => {
  // Function to sort weekdays.

  const sortingFunction = (a, b) => {
    // Weekdays in Swedish
    const weekdays = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag"]

    // Get the weekday from a and b
    const dayA = a.node.dag
    const dayB = b.node.dag

    // Get the index for a and b in the weekdays array
    const indexA = weekdays.indexOf(dayA)
    const indexB = weekdays.indexOf(dayB)

    // Compare indexes to sort
    if (indexA > indexB) {
      // Changed this line
      return -1
    }
    if (indexA < indexB) {
      // Changed this line
      return 1
    }
    return 0
  }

  const sortedPosts = data.allContentfulMenyV1.edges.sort(sortingFunction)

  const now = new Date()
  const dayOfWeek = now.getDay() // Veckodag (0 = Söndag, 1 = Måndag, ..., 6 = Lördag)
  const weekNumber = getWeek(now) // Veckonummer
  const weekDays = [
    "Söndag",
    "Måndag",
    "Tisdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lördag",
  ]
  const weekDayName = weekDays[dayOfWeek] // Svenskt veckodagsnamn

  console.log("Veckodag: ", weekDayName)
  console.log("Veckodag: ", dayOfWeek)
  console.log("Veckonummer: ", weekNumber)

  // Funktion för att hämta veckonummer
  function getWeek(date) {
    const onejan = new Date(date.getFullYear(), 0, 1)
    const millisecsInDay = 86400000
    return Math.ceil(
      ((date - onejan) / millisecsInDay + onejan.getDay() + 1) / 7
    )
  }

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
          <Grid container spacing={2}>
            {sortedPosts.reverse().map(edge => {
              // Get the index of the generated day
              const genereradDagIndex = weekDays.indexOf(edge.node.dag)

              // Compare the index of the generated day with the index of today
              return (
                <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
                  <Box
                    key={edge.node.dag}
                    alignItems="center"
                    border={
                      genereradDagIndex === dayOfWeek
                        ? "solid 2px green"
                        : "solid 1px silver"
                    }
                    p={1}
                    display="flex"
                    flexDirection="column"
                    width={{ xs: "120px", md: "200px" }}
                    height={{ xs: "170px", md: "200px" }}
                    // maxWidth="200px"
                    // maxHeight="200px"
                    // alignItems="center"
                  >
                    <Typography variant="h6">{edge.node.dag}</Typography>
                    <Typography variant="h8">{edge.node.rtt}</Typography>
                    {/* Render other values here */}
                    <img
                      className="responsive-img"
                      src={edge.node.bild.file.url}
                    />
                  </Box>
                </Grid>
              )
            })}

            <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
              <Box
                key="empty-box"
                alignItems="center"
                border="solid 1px silver"
                p={1}
                display="flex"
                flexDirection="column"
                width={{ xs: "120px", md: "200px" }}
                height={{ xs: "170px", md: "200px" }}
              >
                <Typography fontSize="12px" fontWeight="bold" mb={1}>
                  Inköp
                </Typography>
                <Stack direction="row" gap={2}>
                  <Stack direction="column">
                    <Typography
                      fontSize="12px"
                      sx={{ textDecoration: "underline" }}
                    >
                      Färskvaror
                    </Typography>
                    <Typography fontSize="12px">Fläskfile</Typography>
                    <Typography fontSize="12px">Grädde</Typography>
                    <Typography fontSize="12px">Potatis</Typography>
                    <Typography fontSize="12px">Paprika</Typography>
                  </Stack>
                  <Stack direction="column">
                    <Typography
                      fontSize="12px"
                      sx={{ textDecoration: "underline" }}
                    >
                      Skafferi
                    </Typography>
                    <Typography fontSize="12px">Fond</Typography>
                    <Typography fontSize="12px">Soja</Typography>
                    <Typography fontSize="12px">Övrigt</Typography>
                    <Typography fontSize="12px">Övrigt</Typography>
                  </Stack>
                </Stack>
              </Box>
            </Grid>
          </Grid>
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
