import * as React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
)

const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div">
        Farsan! Var är du? Vi ska åka till träningen nu!
      </Typography>
    </CardContent>
    <CardActions>
      <Button
        size="small"
        sx={{ border: " solid 2px #ffc451", color: "#063970" }}
      >
        Boka
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
