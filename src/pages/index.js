import { Box, Card, Container, Stack, Typography } from "@mui/material"
import * as React from "react"
import NavBar from "../components/NavBar"
import CardComponentTraining from "../components/CardComponentTraining"
import CardComponentRecepies from "../components/CardComponentRecepies"
import CardComponentBooking from "../components/CardComponentBooking"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Container>
    <NavBar />
    <Stack direction={{ xs: "column", md: "row" }} gap={2} my={2}>
      <CardComponentRecepies />
      <CardComponentTraining />
      <CardComponentBooking />
    </Stack>
    <Footer />
  </Container>
)
export default IndexPage
