import * as React from "react"
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material"

export default function CardComponentTraining() {
  return (
    <Box>
      <Card
        variant="outlined"
        sx={{
          boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.1)",
          "&:hover": {
            backgroundColor: "#f0f0f0",
          },
        }}
      >
        <CardContent>
          <Typography variant="h6" component="div">
            Älskling, Ska vi träna sen?
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            className="button-link"
            size="small"
            sx={{ border: " solid 2px #063970", color: "#063970" }}
          >
            Träna
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}
