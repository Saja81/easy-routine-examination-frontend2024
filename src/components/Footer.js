import * as React from "react"
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material"

import AppRegistrationIcon from "@mui/icons-material/AppRegistration"

import HamburgerMenu from "../components/HamburgerMenu"

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <Typography color="inherit">Powerd by Sandra Jakobsson</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
