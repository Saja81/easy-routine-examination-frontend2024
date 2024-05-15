import * as React from "react"
import { Typography } from "@mui/material"

import { Link } from "gatsby"
import "./NavBar.css"

export default function NavBarLinks() {
  return (
    <>
      <Link className="nav-link" to="/RecepiesApp">
        <Typography color="inherit">Recept</Typography>
      </Link>
      <Link className="nav-link" to="/TrainingApp">
        <Typography color="inherit">Träningspass</Typography>
      </Link>
      <Link className="nav-link" to="/BookingApp">
        <Typography color="inherit">Boka skjuts</Typography>
      </Link>
    </>
  )
}
