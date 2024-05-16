import { Stack } from "@mui/material"
import * as React from "react"
import CardComponentTraining from "../components/CardComponentTraining"
import Layout from "../components/Layout"

const TrainingApp = () => (
  <Layout>
    <Stack direction={{ xs: "column", md: "row" }} gap={2} my={2}>
      <CardComponentTraining />
    </Stack>
  </Layout>
)
export default TrainingApp
