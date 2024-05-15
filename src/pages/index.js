import { Container, Grid, Stack } from "@mui/material"
import * as React from "react"
import NavBar from "../components/NavBar"
import CardComponentTraining from "../components/CardComponentTraining"
import CardComponentRecepies from "../components/CardComponentRecepies"
import CardComponentBooking from "../components/CardComponentBooking"
import Footer from "../components/Footer"
import "../styles/index.css"

const App = () => (
  <Container>
    <NavBar />
    {/* <Stack direction={{ xs: "column", md: "row" }} gap={2} my={2}> */}
    <Grid container spacing={2} my={2}>
      <Grid item xs={12} md={4}>
        <CardComponentRecepies />
      </Grid>
      <Grid item xs={12} md={4}>
        <CardComponentTraining />
      </Grid>
      <Grid item xs={12} md={4}>
        <CardComponentBooking />
      </Grid>
    </Grid>
    {/* </Stack> */}
    <Footer />
  </Container>
)
export default App
