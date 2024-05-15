import * as React from "react"
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material"

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
