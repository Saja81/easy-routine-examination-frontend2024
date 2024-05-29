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
          bgcolor: "#D3D3D3 ",
          boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
          "&:hover": {
            backgroundColor: "#DCDCDC ",
          },
        }}
      >
        <CardContent>
          <Typography color="#333333" variant="h6" component="div">
            Älskling, Ska vi träna sen?
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            className="button-link"
            size="small"
            sx={{
              border: " solid 1px #333333",
              color: "#333333",
            }}
          >
            Träna
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}
