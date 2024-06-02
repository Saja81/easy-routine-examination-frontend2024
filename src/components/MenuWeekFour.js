import * as React from "react"
import { useState } from "react"
import { Box, Button, Grid, Modal, Stack, Typography } from "@mui/material"
import { graphql, useStaticQuery, Link } from "gatsby"
import { sortingFunction, getCurrentWeekInfo } from "../utils/utils"
import InkopWeekFour from "../components/InkopWeekFour"

const Week4 = () => {
  const data = useStaticQuery(graphql`
    query {
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
            slug
          }
        }
      }
    }
  `)
  const sortedPosts4 = data.menyV4.edges.sort(sortingFunction)
  const { dayOfWeek, weekDays, weekNumber } = getCurrentWeekInfo()
  const [isModal, setIsModal] = useState(false)
  return (
    <Grid container spacing={2}>
      {sortedPosts4.reverse().map(edge => {
        // Get the index of the generated day
        const genereradDagIndex = weekDays.indexOf(edge.node.dag)

        // Compare the index of the generated day with the index of today
        return (
          <Grid key={edge.node.rtt} item xs={6} sm={6} md={4} lg={4} xl={4}>
            <Link className="menu-link" to={`/menyv4/${edge.node.slug}/`}>
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
          onClick={() => setIsModal(true)}
          sx={{ cursor: "pointer" }}
        >
          <Typography>Inköp</Typography>
          <Typography>Vecka {weekNumber} </Typography>

          <Modal
            open={isModal}
            onClose={() => setIsModal(false)}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="90vh"
            >
              <Stack
                bgcolor="white"
                borderRadius={2}
                maxWidth="400px"
                width="85%"
                height="90%"
                p={2}
                textAlign="center"
              >
                <InkopWeekFour />
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-end"
                  alignItems="flex-end"
                  height="100%"
                  className="parent-element"
                >
                  <Button
                    onClick={event => {
                      event.stopPropagation()
                      setIsModal(false)
                    }}
                  >
                    STÄNG
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Modal>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Week4
