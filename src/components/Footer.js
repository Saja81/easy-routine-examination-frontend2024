import * as React from "react"
import { AppBar, Box, Toolbar, Typography } from "@mui/material"

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#063970" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <Typography color="inherit">Powerd by Sandra Jakobsson</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
