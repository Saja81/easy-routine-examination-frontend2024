import * as React from "react"
import { IconButton, Popover, Stack, Typography } from "@mui/material"

import MenuIcon from "@mui/icons-material/Menu"
import { Link } from "gatsby"
import "./NavBar.css"

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? "simple-popover" : undefined

  return (
    <div>
      <IconButton aria-describedby={id} onClick={handleClick}>
        <MenuIcon sx={{ color: "white" }} />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Stack p={2} gap={2}>
          <Link className="nav-link-ham" to="/RecepiesApp">
            <Typography color="inherit">Recept</Typography>
          </Link>
          <Link className="nav-link-ham" to="/TrainingApp">
            <Typography color="inherit">Träningspass</Typography>
          </Link>
          <Link className="nav-link-ham" to="/BookingApp">
            <Typography color="inherit">Boka skjuts</Typography>
          </Link>
        </Stack>
      </Popover>
    </div>
  )
}
