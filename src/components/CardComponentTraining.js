import * as React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
)

const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div">
        Älskling, Ska vi träna sen?
      </Typography>
    </CardContent>
    <CardActions>
      <Button
        size="small"
        sx={{ border: " solid 2px #063970", color: "#063970" }}
      >
        Träna
      </Button>
    </CardActions>
  </React.Fragment>
)

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        variant="outlined"
        sx={{
          boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.1)",
          "&:hover": {
            backgroundColor: "#f0f0f0",
          },
        }}
      >
        {card}
      </Card>
    </Box>
  )
}
