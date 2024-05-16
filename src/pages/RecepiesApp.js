import { Container, Stack } from "@mui/material"
import * as React from "react"
import NavBar from "../components/NavBar"
import CardComponentRecepies from "../components/CardComponentRecepies"
import Footer from "../components/Footer"
import Layout from "../components/Layout"

const RecepiesApp = () => (
  <Container>
    <Layout>
      <Stack direction={{ xs: "column", md: "row" }} gap={2} my={2}>
        <CardComponentRecepies />
      </Stack>
    </Layout>
  </Container>
)
export default RecepiesApp
