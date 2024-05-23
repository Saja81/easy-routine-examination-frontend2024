import * as React from "react"
import { useState, useEffect } from "react"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null)
  const [notes, setNotes] = useState({})
  const [inputValue, setInputValue] = useState("")

  // Fetch notes from JSON file on component mount
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch("/notes.json") // Fetch from public folder
        const data = await response.json()
        setNotes(data)
        console.log("Notes fetched:", data)
      } catch (error) {
        console.error("Error fetching notes:", error)
      }
    }
    fetchNotes()
  }, [])

  const handleDateChange = newValue => {
    setSelectedDate(newValue)
    const dateStr = newValue ? newValue.format("YYYY-MM-DD") : null
    setInputValue(notes && notes[dateStr] ? notes[dateStr] : "") // Display the note for the selected date or an empty string
  }

  const handleInputChange = e => {
    const newValue = e.target.value
    setInputValue(newValue)
  }

  const handleBookButtonClick = () => {
    if (selectedDate) {
      const dateStr = selectedDate.format("YYYY-MM-DD")
      const updatedNotes = {
        ...notes,
        [dateStr]: inputValue,
      }
      setNotes(updatedNotes)

      // Save to local storage (since we cannot write to a file in a static environment)
      localStorage.setItem("notes", JSON.stringify(updatedNotes))
    }
  }

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes")
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes))
    }
  }, [])

  if (!notes) {
    return <div>Loading...</div> // Add a loading state until notes are fetched
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {selectedDate && (
        <Box mt={2}>
          <TextField
            label={`Boka: ${selectedDate.format("YYYY-MM-DD")}`}
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={handleInputChange}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleBookButtonClick}
          >
            Boka
          </Button>
        </Box>
      )}
      <StaticDatePicker
        orientation="portrait"
        value={selectedDate}
        onChange={handleDateChange}
      />
      <Box mt={2} p={2} border={1} borderRadius={4}>
        <Typography variant="h6" gutterBottom>
          Bokningar:
        </Typography>
        {Object.entries(notes).map(([date, booking]) => (
          <Typography key={date} variant="body1">
            {date}: {booking}
          </Typography>
        ))}
      </Box>
    </LocalizationProvider>
  )
}

export default CalendarComponent
