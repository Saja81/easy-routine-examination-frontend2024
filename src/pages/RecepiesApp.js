import { Box, Container, Stack, Typography } from "@mui/material"
import * as React from "react"
import CardComponentRecepies from "../components/CardComponentRecepies"
import Layout from "../components/Layout"

const RecepiesApp = () => (
  <Layout>
    {/* <Container>
      <Stack>
        <Typography variant="h2">Meny vecka 20</Typography>
        <Box>
          <Typography variant="h4">Dag</Typography>
          <Typography>Rätt</Typography>
        </Box>
      </Stack>
    </Container> */}
    <CardComponentRecepies />
  </Layout>
)
export default RecepiesApp
