import { Container, Stack } from "@mui/material"
import * as React from "react"
import NavBar from "../components/NavBar"
import CardComponentTraining from "../components/CardComponentTraining"
import Layout from "../components/Layout"

import Footer from "../components/Footer"

const TrainingApp = () => (
  <Container>
    <Layout>
      <Stack direction={{ xs: "column", md: "row" }} gap={2} my={2}>
        <CardComponentTraining />
      </Stack>
    </Layout>
  </Container>
)
export default TrainingApp
