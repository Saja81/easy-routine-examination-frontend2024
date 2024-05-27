import * as React from "react"
import { Box, Button, Divider, Stack, Typography } from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const TrainingBarebell = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTrainingBarbell {
        edges {
          node {
            namn
            slug
            hur
            vad {
              raw
            }
          }
        }
      }
    }
  `)

  // Generera ett slumpmässigt index
  const randomIndex = Math.floor(
    Math.random() * data.allContentfulTrainingBarbell.edges.length
  )
  // Hämta en slumpmässig träning från listan
  const randomTraining =
    data.allContentfulTrainingBarbell.edges[randomIndex].node

  console.log(randomTraining)

  return (
    <Box maxWidth="100%">
      <Typography variant="h7" fontWeight="bold">
        {randomTraining.namn}
      </Typography>
      <Divider sx={{ width: "100%", my: 2 }} />
      <Typography variant="body2" sx={{ maxHeight: 200, overflow: "auto" }}>
        {randomTraining.hur}
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Divider sx={{ width: "50%", my: 2 }} />
      </Box>
      <Stack spacing={2}>
        <Typography variant="body2" sx={{ maxHeight: 200, overflow: "auto" }}>
          {documentToReactComponents(JSON.parse(randomTraining.vad.raw))}
        </Typography>
      </Stack>

      <Button variant="outlined" sx={{ mt: 4 }}>
        Let's Go!
      </Button>
    </Box>
  )
}

export default TrainingBarebell
