import * as React from "react"
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material"
import { Link } from "gatsby"

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
        <CardContent>
          <Typography variant="h6" component="div">
            Farsan, Var är du? Vi ska åka nu!
          </Typography>
        </CardContent>
        <CardActions>
          <Link to="/BookingApp">
            <Button
              size="small"
              sx={{ border: " solid 2px #ffc451", color: "#063970" }}
            >
              Boka
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  )
}
