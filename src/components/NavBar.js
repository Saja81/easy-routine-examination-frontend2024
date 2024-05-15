import * as React from "react"
// import { useState } from "react"
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
import HamburgerMenu from "../components/HamburgerMenu"
import { Link } from "gatsby"
import "./NavBar.css"
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
          <Link className="nav-link" to="/">
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
            <Link className="nav-link" to="/RecepiesApp">
              <Typography color="inherit">Recept</Typography>
            </Link>
            <Link className="nav-link" to="/TrainingApp">
              <Typography color="inherit">Träningspass</Typography>
            </Link>
            <Link className="nav-link" to="/BookingApp">
              <Typography color="inherit">Boka skjuts</Typography>
            </Link>
          </Stack>
          <Box display={{ xs: "flex", md: "none" }}>
            <IconButton onClick={handleMenuClick}>
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
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
              <Link className="nav-link" to="/RecepiesApp">
                <Typography variant="body1" color="inherit">
                  Recept
                </Typography>
              </Link>
              <Link className="nav-link" to="/TrainingApp">
                <Typography variant="body1" color="inherit">
                  Träningspass
                </Typography>
              </Link>
              <Link className="nav-link" to="/BookingApp">
                <Typography variant="body1" color="inherit">
                  Boka skjuts
                </Typography>
              </Link>
            </Stack>
          </>
        )}
      </AppBar>
    </Box>
  )
}
