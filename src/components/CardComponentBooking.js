import * as React from "react"
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material"

export default function CardComponentBooking() {
  return (
    <Box>
      <Card
        variant="outlined"
        sx={{
          bgcolor: "#e09f3e",
          boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.1)",
          "&:hover": {
            backgroundColor: "#C78625",
          },
        }}
      >
        <CardContent>
          <Typography color="white" variant="h6" component="div">
            Farsan, Var är du? Vi ska åka nu!
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
            Boka
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}
