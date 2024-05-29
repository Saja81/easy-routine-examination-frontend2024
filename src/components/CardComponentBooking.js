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
          bgcolor: "#D2B48C",
          boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
          "&:hover": {
            backgroundColor: "#C8B192",
          },
        }}
      >
        <CardContent>
          <Typography color="#6E3B17" variant="h6" component="div">
            Farsan, Var är du? Vi ska åka nu!
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            className="button-link"
            size="small"
            sx={{
              border: " solid 1px #6E3B17",
              color: "#6E3B17",
            }}
          >
            Boka
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}
