import * as React from "react"
import {
  Box,
  Button,
  IconButton,
  Popover,
  Stack,
  Typography,
} from "@mui/material"

import MenuIcon from "@mui/icons-material/Menu"

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
        <MenuIcon color="white" />
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
          <Typography color="inherit">Recept</Typography>
          <Typography color="inherit">Träningspass</Typography>
          <Typography color="inherit">Boka skjuts</Typography>
        </Stack>
      </Popover>
    </div>
  )
}
