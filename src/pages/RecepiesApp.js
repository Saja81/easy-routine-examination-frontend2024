import * as React from "react"
import { Card, Container, Typography } from "@mui/material"
import Layout from "../components/Layout"

import {
  getCurrentWeekInfo,
  getMenusForWeek, // Importera funktionen här
} from "../utils/utils"
import Week1 from "../components/MenuWeekOne"
import Week2 from "../components/MenuWeekTwo"
import Week3 from "../components/MenuWeekThree"
import Week4 from "../components/MenuWeekFour"

const RecepiesApp = () => {
  // Hårdkoda weekNumber för testning
  // const weekNumber = 3
  const { weekNumber } = getCurrentWeekInfo()
  console.log("Veckonummer är: ", weekNumber)
  const { menuOne, menuTwo, menuThree, menuFour } = getMenusForWeek(weekNumber)

  return (
    <Layout>
      <Container>
        <Card
          variant="none"
          sx={{
            textAlign: "center",
            my: 2,
          }}
        >
          <Typography variant="h5" mb={4}>
            Meny vecka {weekNumber}
          </Typography>

          {menuOne && <Week1 />}
          {menuTwo && <Week2 />}
          {menuThree && <Week3 />}
          {menuFour && <Week4 />}
        </Card>
      </Container>
    </Layout>
  )
}

export default RecepiesApp
