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
          bgcolor: "#c61010",
          boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.1)",
          "&:hover": {
            backgroundColor: "#AD0000",
          },
        }}
      >
        <CardContent>
          <Typography color="white" variant="h6" component="div">
            Älskling, Ska vi träna sen?
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
            Träna
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}
