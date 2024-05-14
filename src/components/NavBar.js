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
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box display="flex" direction="row">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ py: 0 }}
              // sx={{ mr: 2 }}
            >
              <AppRegistrationIcon />
            </IconButton>
            <Typography
              display={{ xs: "none", md: "block" }}
              variant="h6"
              // component="div"
            >
              Easy Routine
            </Typography>

            <Typography
              display={{ xs: "block", md: "none" }}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              ER
            </Typography>
          </Box>
          <Stack display={{ xs: "none", md: "flex" }} direction="row" gap={2}>
            <Typography color="inherit">Recept</Typography>
            <Typography color="inherit">Träningspass</Typography>
            <Typography color="inherit">Boka skjuts</Typography>
          </Stack>
          <Box display={{ xs: "flex", md: "none" }}>
            <HamburgerMenu />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
