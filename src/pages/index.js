import { Container, Grid } from "@mui/material"
import * as React from "react"
import CardComponentTraining from "../components/CardComponentTraining"
import CardComponentRecepies from "../components/CardComponentRecepies"
import CardComponentBooking from "../components/CardComponentBooking"
import Layout from "../components/Layout"
import "../styles/index.css"
import { Link } from "gatsby"
import { db } from "../../firebaseConfig"

const App = () => (
  <Container>
    <Layout>
      {/* Utveckla färgerna med ljus bakgrundfärg för varje appkomponent + mörkare förg för texten.  */}
      {/* Grönt Popupp fönster eller Appbar/meddelande fönster för bokning som kan kryssas bort.  */}
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
    </Layout>
  </Container>
)
export default App
