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
          bgcolor: "#9BCD9B",
          boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
          "&:hover": {
            backgroundColor: "#A9D0A9",
          },
        }}
      >
        <CardContent>
          <Typography color="#0C4738" variant="h6" component="div">
            Vad ska vi äta idag?
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            className="button-link"
            size="small"
            sx={{
              border: " solid 1px #0C4738",
              color: "#0C4738",
            }}
          >
            Ät
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}
