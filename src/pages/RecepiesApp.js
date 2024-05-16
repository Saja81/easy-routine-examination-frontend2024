import * as React from "react"
import { Box, Card, Container, Stack, Typography } from "@mui/material"
import Image from "mui-image"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const RecepiesApp = ({ data }) => {
  // Function to sort weekdays.
  const sortingFunction = (a, b) => {
    // Weekdays in Swedish
    const weekdays = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag"]

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
            my: 2,
          }}
        >
          <Stack alignItems="center" my={2}>
            <Typography variant="h5" mb={4}>
              Meny vecka {weekNumber}
            </Typography>
            <Stack
              direction={{ xs: "column-reverse", md: "row-reverse" }}
              gap={4}
            >
              {sortedPosts.map(edge => {
                // Get the index of the generated day
                const genereradDagIndex = weekDays.indexOf(edge.node.dag)

                // Compare the index of the generated day with the index of today
                if (genereradDagIndex === dayOfWeek) {
                  console.log("Dagen stämmer överens med idag!")
                  return (
                    <Stack
                      alignItems="center"
                      border="solid 2px green" // Apply green border
                      p={1}
                      gap={1}
                      width="200px"
                    >
                      <Typography variant="h6">{edge.node.dag}</Typography>
                      <Typography variant="h8">{edge.node.rtt}</Typography>
                      {/* Render other values here */}

                      <Image src={edge.node.bild.file.url} width={100} />
                    </Stack>
                  )
                } else {
                  console.log("Dagen stämmer inte överens med idag.")
                  return (
                    <Stack
                      alignItems="center"
                      border="solid 1px silver"
                      p={1}
                      gap={1}
                      width="200px"
                    >
                      <Typography variant="h6">{edge.node.dag}</Typography>
                      <Typography variant="h8">{edge.node.rtt}</Typography>
                      {/* Render other values here */}

                      <Image src={edge.node.bild.file.url} width={100} />
                    </Stack>
                  )
                }
              })}
            </Stack>
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
