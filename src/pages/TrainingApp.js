import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Modal,
  Stack,
  Typography,
} from "@mui/material"
import * as React from "react"
import { useState, useEffect } from "react"
import CloseIcon from "@mui/icons-material/Close"

import dumbells_gray from "../images/dumbells_gray.png"
import dumbells_blue from "../images/dumbells_blue.png"
import barbell_gray from "../images/barbell_gray.png"
import barbell_blue from "../images/barbell_blue.png"
import kettlebell_gray from "../images/kettlebell_gray.png"
import kettlebell_blue from "../images/kettlebell_blue.png"
import Ny_gray from "../images/Ny_gray.png"
import Ny_blue from "../images/Ny_blue.png"
import Mo_gray from "../images/Mo_gray.png"
import Mo_blue from "../images/Mo_blue.png"
import El_gray from "../images/El_gray.png"
import El_blue from "../images/El_blue.png"

import Layout from "../components/Layout"

const TrainingApp = () => {
  const [currentImageDumb, setCurrentImageDumb] = useState(dumbells_gray)
  const [isDumbellsBlue, setIsDumbellsBlue] = useState(false)
  const [isModal, setIsModal] = useState(false)

  const [currentImageBar, setCurrentImageBar] = useState(barbell_gray)
  const [isBarBlue, setIsBarBlue] = useState(false)

  const [currentImageKet, setCurrentImageKet] = useState(kettlebell_gray)
  const [isKetBlue, setIsKetBlue] = useState(false)

  const [selectedEquipment, setSelectedEquipment] = useState([])

  const toggleImageDumb = () => {
    setCurrentImageDumb(prevImage => {
      const nextImage =
        prevImage === dumbells_gray ? dumbells_blue : dumbells_gray
      if (nextImage === dumbells_gray) {
        setSelectedEquipment(prevEquipment =>
          prevEquipment.filter(item => item !== "Dumbells")
        )
      } else {
        setSelectedEquipment(prevEquipment => [...prevEquipment, "Dumbells"])
      }
      setIsDumbellsBlue(prevState => !prevState)
      return nextImage
    })
  }

  const toggleImageBar = () => {
    setCurrentImageBar(prevImage => {
      const nextImage = prevImage === barbell_gray ? barbell_blue : barbell_gray
      if (nextImage === barbell_gray) {
        setSelectedEquipment(prevEquipment =>
          prevEquipment.filter(item => item !== "Barbell")
        )
      } else {
        setSelectedEquipment(prevEquipment => [...prevEquipment, "Barbell"])
      }
      setIsBarBlue(prevState => !prevState)
      return nextImage
    })
  }

  const toggleImageKet = () => {
    setCurrentImageKet(prevImage => {
      const nextImage =
        prevImage === kettlebell_gray ? kettlebell_blue : kettlebell_gray
      if (nextImage === kettlebell_gray) {
        setSelectedEquipment(prevEquipment =>
          prevEquipment.filter(item => item !== "Kettlebell")
        )
      } else {
        setSelectedEquipment(prevEquipment => [...prevEquipment, "Kettlebell"])
      }
      setIsKetBlue(prevState => !prevState)
      return nextImage
    })
  }

  useEffect(() => {
    console.log("Utrustning: ", selectedEquipment)
  }, [selectedEquipment])

  return (
    <Layout>
      <Container>
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6">Dagens träningspass</Typography>
          <Divider sx={{ width: "100%", my: 2 }} />

          <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Typography>Välj vilken utrustning du vill träna med:</Typography>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <img
                  src={currentImageDumb}
                  alt="Dumbells"
                  onClick={toggleImageDumb}
                  width="70px"
                  height="70px"
                  style={{ cursor: "pointer" }}
                />
              </Grid>
              <Grid item xs={4}>
                <img
                  src={currentImageBar}
                  alt="Barbell"
                  onClick={toggleImageBar}
                  width="70px"
                  height="70px"
                  style={{ cursor: "pointer" }}
                />
              </Grid>
              <Grid item xs={4}>
                <img
                  src={currentImageKet}
                  alt="Kettlebell"
                  onClick={toggleImageKet}
                  width="70px"
                  height="70px"
                  style={{ cursor: "pointer" }}
                />
              </Grid>
            </Grid>
          </Box>

          {/* Knapp för att lägga till vald utrustning */}
          <Button variant="contained" onClick={() => setIsModal(true)}>
            Öppna träningspass
          </Button>

          {selectedEquipment.includes("Kettlebell") && (
            <Modal
              open={isModal}
              onClose={() => setIsModal(false)}
              aria-labelledby="modal-title"
              aria-describedby="modal-description"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="100vh"
              >
                <Stack
                  bgcolor="white"
                  borderRadius={2}
                  width="75%"
                  height="75%"
                  p={2}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h7" fontWeight="bold">
                      Kettlebell
                    </Typography>
                    <IconButton>
                      <CloseIcon onClick={() => setIsModal(false)} />
                    </IconButton>
                  </Stack>
                  <Typography>Swing</Typography>
                  <Typography>Snatch</Typography>
                  <Typography>Press</Typography>
                </Stack>
              </Box>
            </Modal>
          )}
          {selectedEquipment.includes("Dumbells") && (
            <Modal
              open={isModal}
              onClose={() => setIsModal(false)}
              aria-labelledby="modal-title"
              aria-describedby="modal-description"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="100vh"
              >
                <Stack
                  bgcolor="white"
                  borderRadius={2}
                  width="75%"
                  height="75%"
                  p={2}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h7" fontWeight="bold">
                      Dumbells
                    </Typography>
                    <IconButton>
                      <CloseIcon onClick={() => setIsModal(false)} />
                    </IconButton>
                  </Stack>
                  <Typography>Press</Typography>
                  <Typography>Curls</Typography>
                  <Typography>Lyft åt sidan</Typography>
                </Stack>
              </Box>
            </Modal>
          )}
          {selectedEquipment.includes("Barbell") && (
            <Modal
              open={isModal}
              onClose={() => setIsModal(false)}
              aria-labelledby="modal-title"
              aria-describedby="modal-description"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="100vh"
              >
                <Stack
                  bgcolor="white"
                  borderRadius={2}
                  width="75%"
                  height="75%"
                  p={2}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h7" fontWeight="bold">
                      Barbell
                    </Typography>
                    <IconButton>
                      <CloseIcon onClick={() => setIsModal(false)} />
                    </IconButton>
                  </Stack>
                  <Typography>Knäböj</Typography>
                  <Typography>Marklyft</Typography>
                  <Typography>Bänkpress</Typography>
                </Stack>
              </Box>
            </Modal>
          )}
        </Stack>
      </Container>
    </Layout>
  )
}

export default TrainingApp
