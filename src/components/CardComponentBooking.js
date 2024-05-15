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
          boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.1)",
          "&:hover": {
            backgroundColor: "#f0f0f0",
          },
        }}
      >
        <CardContent>
          <Typography variant="h6" component="div">
            Farsan, Var är du? Vi ska åka nu!
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            className="button-link"
            size="small"
            sx={{ border: " solid 2px #ffc451", color: "#063970" }}
          >
            Boka
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}
