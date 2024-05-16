import { Container, Grid, Stack } from "@mui/material"
import * as React from "react"
import NavBar from "../components/NavBar"
import CardComponentTraining from "../components/CardComponentTraining"
import CardComponentRecepies from "../components/CardComponentRecepies"
import CardComponentBooking from "../components/CardComponentBooking"
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import "../styles/index.css"
import { Link } from "gatsby"

const App = () => (
  <Container>
    <Layout>
      {/* <Stack direction={{ xs: "column", md: "row" }} gap={2} my={2}> */}
      <Grid container spacing={2} my={2}>
        <Grid item xs={12} md={4}>
          <Link className="card-link" to="/RecepiesApp">
            <CardComponentRecepies />
          </Link>
        </Grid>

        <Grid item xs={12} md={4}>
          <Link className="card-link" to="/TrainingApp">
            <CardComponentTraining />
          </Link>
        </Grid>

        <Grid item xs={12} md={4}>
          <Link className="card-link" to="/BookingApp">
            <CardComponentBooking />
          </Link>
        </Grid>
      </Grid>
      {/* </Stack> */}
      <Footer />
    </Layout>
  </Container>
)
export default App
