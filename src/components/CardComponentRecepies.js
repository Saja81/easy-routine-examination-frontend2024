import * as React from "react"
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material"

export default function CardComponentRecepies() {
  return (
    <Box>
      <Card
        variant="outlined"
        sx={{
          bgcolor: "#209330",
          boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.1)",
          "&:hover": {
            backgroundColor: "#067916",
          },
        }}
      >
        <CardContent>
          <Typography color="white" variant="h6" component="div">
            Vad ska vi äta idag?
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            className="button-link"
            size="small"
            sx={{
              border: " solid 1px white",
              color: "white",
            }}
          >
            Ät
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}
