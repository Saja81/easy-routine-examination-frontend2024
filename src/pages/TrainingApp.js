import { Container, Stack } from "@mui/material"
import * as React from "react"
import NavBar from "../components/NavBar"
import CardComponentTraining from "../components/CardComponentTraining"

import Footer from "../components/Footer"

const TrainingApp = () => (
  <Container>
    <NavBar />
    <Stack direction={{ xs: "column", md: "row" }} gap={2} my={2}>
      <CardComponentTraining />
    </Stack>
    <Footer />
  </Container>
)
export default TrainingApp
