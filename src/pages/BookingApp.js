import { Container, Stack } from "@mui/material"
import * as React from "react"
import NavBar from "../components/NavBar"
import Layout from "../components/Layout"

import CardComponentBooking from "../components/CardComponentBooking"
import Footer from "../components/Footer"

const BookingApp = () => (
  <Container>
    <Layout>
      <Stack direction={{ xs: "column", md: "row" }} gap={2} my={2}>
        <CardComponentBooking />
      </Stack>
    </Layout>
  </Container>
)
export default BookingApp
