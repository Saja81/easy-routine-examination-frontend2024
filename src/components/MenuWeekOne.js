import * as React from "react"
import { Box, Grid, Stack, Typography } from "@mui/material"
import { graphql, useStaticQuery, Link } from "gatsby"
import { sortingFunction, getCurrentWeekInfo } from "../utils/utils"

const Week1 = () => {
  const data = useStaticQuery(graphql`
    query {
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
            slug
          }
        }
      }
    }
  `)
  const sortedPosts1 = data.menyV1.edges.sort(sortingFunction)
  const { dayOfWeek, weekDays } = getCurrentWeekInfo()
  return (
    <Grid container spacing={2}>
      {sortedPosts1.reverse().map(edge => {
        // Get the index of the generated day
        const genereradDagIndex = weekDays.indexOf(edge.node.dag)

        // Compare the index of the generated day with the index of today
        return (
          <Grid key={edge.node.rtt} item xs={6} sm={6} md={4} lg={4} xl={4}>
            <Link className="menu-link" to={`/menyv1/${edge.node.slug}/`}>
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
                  alt="Todays meal"
                />
              </Box>
            </Link>
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
              <Typography fontSize="12px" sx={{ textDecoration: "underline" }}>
                Färskvaror
              </Typography>
              <Typography fontSize="12px">Fläskfile</Typography>
              <Typography fontSize="12px">Grädde</Typography>
              <Typography fontSize="12px">Potatis</Typography>
              <Typography fontSize="12px">Paprika</Typography>
            </Stack>
            <Stack direction="column">
              <Typography fontSize="12px" sx={{ textDecoration: "underline" }}>
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
  )
}

export default Week1
