import * as React from "react"
import CardComponentRecepies from "../components/CardComponentRecepies"
import { Box, Card, Container, Stack, Typography } from "@mui/material"
import Image from "mui-image"
// Read more about Image from mui: https://www.npmjs.com/package/mui-image
import Layout from "../components/Layout"
import food from "./food.jpg"

const RecepiesApp = () => (
  <Layout>
    <Container>
      <Card
        variant="none"
        sx={{
          my: 2,
        }}
      >
        <Stack alignItems="center" my={2}>
          <Typography variant="h5" mb={4}>
            Meny vecka 20
          </Typography>
          <Stack direction="column" gap={1}>
            <Stack direction={{ xs: "column", md: "row" }} gap={1}>
              <Stack
                alignItems="center"
                border="solid 1px silver"
                p={1}
                gap={1}
                width="200px"
              >
                <Typography variant="h6">Måndag</Typography>
                <Typography variant="h8">Köttbullar med mos</Typography>
                <Image src={food} width={100} />
              </Stack>
              <Stack
                alignItems="center"
                border="solid 1px silver"
                p={1}
                gap={1}
                width="200px"
              >
                <Typography variant="h6">Tisdag</Typography>
                <Typography variant="h8">
                  Snitzel med råstekt potatis
                </Typography>
                <Image src={food} width={100} />
              </Stack>
              <Stack
                alignItems="center"
                border="solid 1px silver"
                p={1}
                gap={1}
                width="200px"
              >
                <Typography variant="h6">Onsdag</Typography>
                <Typography variant="h8">Kycklingwok med ris</Typography>
                <Image src={food} width={100} />
              </Stack>
            </Stack>
            <Stack direction={{ xs: "column", md: "row" }} gap={1}>
              <Stack
                alignItems="center"
                border="solid 1px silver"
                p={1}
                gap={1}
                width="200px"
              >
                <Typography variant="h6">Torsdag</Typography>
                <Typography variant="h8">Korvstroganoff med mos</Typography>
                <Image src={food} width={100} />
              </Stack>
              <Stack
                alignItems="center"
                border="solid 1px silver"
                p={1}
                gap={1}
                width="200px"
              >
                <Typography variant="h6">Fredag</Typography>
                <Typography variant="h8">
                  Fläskifilegryta med potatis
                </Typography>
                <Image src={food} width={100} />
              </Stack>
              <Stack
                alignItems="center"
                border="solid 1px silver"
                p={1}
                gap={1}
                width="200px"
              >
                <Typography variant="h6">Inköp</Typography>
                <Typography variant="h8">Potatis</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Card>
    </Container>
    {/* <CardComponentRecepies /> */}
  </Layout>
)

export default RecepiesApp
