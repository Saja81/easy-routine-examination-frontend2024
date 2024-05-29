import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Modal,
  Stack,
  Typography,
} from "@mui/material"
import * as React from "react"
import { useState, useEffect } from "react"

import TrainingCrossfit from "../components/TrainingCrossfit"
import TrainingKettlebell from "../components/TrainingKettlebell"
import TrainingBarebell from "../components/TrainingBarebell"

import barbell_gray from "../images/barbell_gray.png"
import barbell_blue from "../images/barbell_blue.png"
import kettlebell_gray from "../images/kettlebell_gray.png"
import kettlebell_blue from "../images/kettlebell_blue.png"
import crossfit_gray from "../images/crossfit_gray.png"
import crossfit_blue from "../images/crossfit_blue.png"

import Layout from "../components/Layout"

const equipmentImages = {
  Crossfit: { gray: crossfit_gray, blue: crossfit_blue },
  Kettlebell: { gray: kettlebell_gray, blue: kettlebell_blue },
  // Dumbells: { gray: dumbells_gray, blue: dumbells_blue },
  Barbell: { gray: barbell_gray, blue: barbell_blue },
}

const TrainingApp = () => {
  const [images, setImages] = useState({
    // Dumbells: dumbells_gray,
    Barbell: barbell_gray,
    Kettlebell: kettlebell_gray,
    Crossfit: crossfit_gray,
  })

  const [selectedEquipment, setSelectedEquipment] = useState([])
  const [isModal, setIsModal] = useState(false)
  const [flipped, setFlipped] = useState({})

  const toggleImage = name => {
    setFlipped(prev => ({ ...prev, [name]: !prev[name] }))
    setTimeout(() => {
      setImages(prevImages => {
        const isBlue = prevImages[name] === equipmentImages[name].blue
        const nextImage = isBlue
          ? equipmentImages[name].gray
          : equipmentImages[name].blue
        return { ...prevImages, [name]: nextImage }
      })
      setSelectedEquipment(prevEquipment => {
        if (prevEquipment.includes(name)) {
          return prevEquipment.filter(item => item !== name)
        } else {
          return [...prevEquipment, name]
        }
      })
    }, 300) // Match the timeout with the CSS transition duration
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
            <Typography mb={2}>
              Välj vilken utrustning du vill träna med:
            </Typography>
            <Grid container spacing={2}>
              {Object.keys(equipmentImages).map(name => (
                <Grid item xs={4} key={name} className="toggle-img-container">
                  <img
                    className={`toggle-img ${flipped[name] ? "flip" : ""}`}
                    src={images[name]}
                    alt={name}
                    onClick={() => toggleImage(name)}
                    width="70px"
                    height="70px"
                    style={{ cursor: "pointer" }}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>

          <Button
            variant="contained"
            onClick={() => setIsModal(true)}
            sx={{ my: 2 }}
          >
            Öppna träningspass
          </Button>

          {["Kettlebell", "Dumbells", "Barbell", "Crossfit"].map(
            name =>
              selectedEquipment.includes(name) && (
                <Modal
                  open={isModal}
                  onClose={() => setIsModal(false)}
                  aria-labelledby="modal-title"
                  aria-describedby="modal-description"
                  key={name}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    height="90vh"
                  >
                    <Stack
                      bgcolor="white"
                      borderRadius={2}
                      width="85%"
                      height="90%"
                      p={2}
                      textAlign="center"
                    >
                      {name === "Crossfit" && (
                        <TrainingCrossfit />

                        // <>
                        //   <Typography>How to do it</Typography>
                        //   <Typography>
                        //     Circuit: 5 laps, 5 exercises, 25 reps
                        //   </Typography>
                        //   <Box
                        //     sx={{
                        //       display: "flex",
                        //       justifyContent: "center",
                        //       alignItems: "center",
                        //     }}
                        //   >
                        //     <Divider sx={{ width: "50%", my: 2 }} />
                        //   </Box>
                        //   <Stack spacing={2}>
                        //     <Typography>Jumpingcropes</Typography>
                        //     <Typography>Pushups</Typography>
                        //     <Typography>Battle ropes</Typography>
                        //     <Typography>Squats</Typography>
                        //     <Typography>Burpees</Typography>
                        //   </Stack>

                        //   <Button variant="outlined" sx={{ mt: 4 }}>
                        //     Let's Go!
                        //   </Button>
                        // </>
                      )}

                      {name === "Kettlebell" && (
                        <TrainingKettlebell />
                        // <>
                        //   <Typography>How to do it</Typography>
                        //   <Typography>
                        //     Amrap 20 minutes, 5 exercises, 15 reps
                        //   </Typography>
                        //   <Box
                        //     sx={{
                        //       display: "flex",
                        //       justifyContent: "center",
                        //       alignItems: "center",
                        //     }}
                        //   >
                        //     <Divider sx={{ width: "50%", my: 2 }} />
                        //   </Box>
                        //   <Stack spacing={2}>
                        //     <Typography>Swing (20 reps)</Typography>
                        //     <Typography>Snatch (20 reps)</Typography>
                        //     <Typography>Press (10 reps/arm)</Typography>
                        //     <Typography>Goblet Squat (20 reps)</Typography>
                        //     <Typography>TGU (10 reps/arm)</Typography>
                        //   </Stack>

                        //   <Button variant="outlined" sx={{ mt: 4 }}>
                        //     Let's Go!
                        //   </Button>
                        // </>
                      )}
                      {/* {name === "Dumbells" && (
                        <>
                          <Typography>How to do it</Typography>
                          <Typography>Styrkelyft: 5*5.</Typography>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Divider sx={{ width: "50%", my: 2 }} />
                          </Box>
                          <Stack spacing={2}>
                            <Typography>Knäböj</Typography>
                            <Typography>Bänkpress</Typography>
                            <Typography>Marklyft</Typography>
                            <Typography>Militärpress</Typography>
                            <Typography>Rodd</Typography>
                          </Stack>

                          <Button variant="outlined" sx={{ mt: 4 }}>
                            Let's Go!
                          </Button>
                        </>
                      )} */}
                      {name === "Barbell" && (
                        <TrainingBarebell />
                        // <>
                        //   <Typography>How to do it</Typography>
                        //   <Typography>
                        //     Amrap 20 minutes, 5 exercises, 15 reps
                        //   </Typography>
                        //   <Box
                        //     sx={{
                        //       display: "flex",
                        //       justifyContent: "center",
                        //       alignItems: "center",
                        //     }}
                        //   >
                        //     <Divider sx={{ width: "50%", my: 2 }} />
                        //   </Box>
                        //   <Stack spacing={2}>
                        //     <Typography>Swing (20 reps)</Typography>
                        //     <Typography>Snatch (20 reps)</Typography>
                        //     <Typography>Press (10 reps/arm)</Typography>
                        //     <Typography>Goblet Squat (20 reps)</Typography>
                        //     <Typography>TGU (10 reps/arm)</Typography>
                        //   </Stack>

                        //   <Button variant="outlined" sx={{ mt: 4 }}>
                        //     Let's Go!
                        //   </Button>
                        // </>
                      )}

                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="flex-end"
                        alignItems="flex-end"
                        height="100%"
                        className="parent-element"
                      >
                        <Button onClick={() => setIsModal(false)}>Close</Button>
                      </Box>
                    </Stack>
                  </Box>
                </Modal>
              )
          )}
        </Stack>
      </Container>
    </Layout>
  )
}

export default TrainingApp
