import * as React from "react"
import { useState, useEffect } from "react"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import CloseIcon from "@mui/icons-material/Close"
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material"

// React component for the calendar
const CalendarComponent = () => {
  // State variables for managing the selected date, booking status, view bookings toggle, bookings array, and input field values
  const [selectedDate, setSelectedDate] = useState(null)
  const [bookingSaved, setBookingSaved] = useState(false)
  const [viewBookings, setViewBookings] = useState(false)
  const [bookings, setBookings] = useState([])
  const [inputValues, setInputValues] = useState({
    name: "",
    time: "",
    location: "",
  })

  // Function to toggle the visibility of all bookings
  const handleToggleBookings = () => {
    setViewBookings(!viewBookings)
  }

  // Function to handle the notification when a booking is saved
  const handleSavedBooking = () => {
    setBookingSaved(true)
    setTimeout(() => {
      setBookingSaved(false)
    }, 3000)
  }

  // Function to handle the change in selected date
  const handleDateChange = newValue => {
    setSelectedDate(newValue)
  }

  // Function to handle the change in input field values
  const handleInputChange = e => {
    const { name, value } = e.target
    setInputValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }))
  }

  // Function to check if all input fields are filled
  const areAllFieldsFilled = () => {
    return inputValues.name && inputValues.time && inputValues.location
  }

  // Function to handle the booking button click
  const handleBookButtonClick = () => {
    if (selectedDate) {
      const dateStr = selectedDate.format("YYYY-MM-DD")
      const summary = {
        date: dateStr,
        name: inputValues.name,
        time: inputValues.time,
        location: inputValues.location,
      }

      // Add the new booking to the bookings array
      setBookings(prevBookings => [...prevBookings, summary])

      // Reset input field values and selected date
      setInputValues({
        name: "",
        time: "",
        location: "",
      })
      setSelectedDate(null)
      handleSavedBooking()
    }
  }

  // Read saved booking values from localStorage when the component mounts
  useEffect(() => {
    const storedBookings = localStorage.getItem("bookings")
    if (storedBookings) {
      setBookings(JSON.parse(storedBookings))
    }
  }, [])

  // Update localStorage every time the bookings array changes
  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookings))
  }, [bookings])

  // JSX structure for the calendar component
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Button onClick={handleToggleBookings}>Se alla bokningar</Button>
      <Stack>
        <Stack my={2}>
          <Typography>1. Välj datum</Typography>
          <DatePicker value={selectedDate} onChange={handleDateChange} />
        </Stack>
        {selectedDate && (
          <>
            <Stack my={2}>
              <Typography>2. Fyll i bokningsinformation</Typography>
              <Box>
                <TextField
                  label="Namn"
                  variant="outlined"
                  fullWidth
                  name="name"
                  value={inputValues.name}
                  onChange={handleInputChange}
                />
                <TextField
                  label="Tid för avgång"
                  variant="outlined"
                  fullWidth
                  name="time"
                  value={inputValues.time}
                  onChange={handleInputChange}
                />
                <TextField
                  label="Var"
                  variant="outlined"
                  fullWidth
                  name="location"
                  value={inputValues.location}
                  onChange={handleInputChange}
                />
              </Box>
            </Stack>
            <Button
              variant="contained"
              disabled={!areAllFieldsFilled()}
              color="primary"
              onClick={handleBookButtonClick}
            >
              Boka
            </Button>
          </>
        )}
      </Stack>
      {bookingSaved && <Typography>Nu är det bokat</Typography>}

      <Dialog open={viewBookings} onClose={handleToggleBookings}>
        <Box m={6}>
          <DialogTitle>
            Bokningar
            <IconButton
              aria-label="close"
              onClick={handleToggleBookings}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>

          {bookings.map((summary, index) => (
            <Box key={index} variant="body1">
              <Typography>{summary.date}:</Typography>
              <Typography mb={2}>
                {summary.name} kl: {summary.time} till: {summary.location}
              </Typography>
            </Box>
          ))}
        </Box>
      </Dialog>
    </LocalizationProvider>
  )
}

export default CalendarComponent
