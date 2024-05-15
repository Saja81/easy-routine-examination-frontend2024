import * as React from "react"
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material"

const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div">
        Vad f**n ska vi äta till middag?
      </Typography>
    </CardContent>
    <CardActions>
      <Button
        size="small"
        sx={{
          border: " solid 2px #59a12f",
          color: "#063970",
        }}
      >
        Ät
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
