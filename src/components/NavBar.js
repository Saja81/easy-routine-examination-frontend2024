import * as React from "react"

import {
  AppBar,
  Box,
  Divider,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material"

import AppRegistrationIcon from "@mui/icons-material/AppRegistration"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import NavBarLinks from "./NavBarLinks"
import { Link } from "gatsby"

import { useState } from "react"

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen)
    console.log("handleMenuClick clicked")
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#063970" }}>
        <Toolbar
          sx={{
            color: "inherit",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link className="loggo-link" to="/">
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
          </Link>
          <Stack display={{ xs: "none", md: "flex" }} direction="row" gap={2}>
            <NavBarLinks />
          </Stack>
          <Box display={{ xs: "flex", md: "none" }}>
            {isMenuOpen ? (
              <IconButton onClick={handleMenuClick}>
                <CloseIcon sx={{ color: "white" }} />
              </IconButton>
            ) : (
              <IconButton onClick={handleMenuClick}>
                {/* Visa din ursprungliga ikon */}
                <MenuIcon sx={{ color: "white" }} />
              </IconButton>
            )}
          </Box>
        </Toolbar>
        {isMenuOpen && (
          <>
            <Divider sx={{ bgcolor: "white" }} />
            <Stack
              direction="column"
              spacing={2}
              p={2}
              sx={{ backgroundColor: "#063970" }}
            >
              <NavBarLinks />
            </Stack>
          </>
        )}
      </AppBar>
    </Box>
  )
}
