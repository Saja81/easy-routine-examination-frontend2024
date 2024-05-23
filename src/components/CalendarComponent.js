import * as React from "react"
import { useState, useEffect } from "react"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null)
  const [notes, setNotes] = useState({})
  const [inputValue, setInputValue] = useState("")

  // Fetch notes from Netlify Function when component mounts
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch("/.netlify/functions/getNotes")
        const data = await response.json()
        setNotes(data)
      } catch (error) {
        console.error("Error fetching notes:", error)
      }
    }
    fetchNotes()
  }, [])

  const handleDateChange = newValue => {
    setSelectedDate(newValue)
    const dateStr = newValue ? newValue.format("YYYY-MM-DD") : null
    setInputValue(notes[dateStr] || "") // Display the note for the selected date or an empty string
  }

  const handleInputChange = async e => {
    const newValue = e.target.value
    setInputValue(newValue)
    if (selectedDate) {
      const dateStr = selectedDate.format("YYYY-MM-DD")
      const updatedNotes = {
        ...notes,
        [dateStr]: newValue,
      }
      setNotes(updatedNotes)

      // Save note to Netlify Function
      try {
        await fetch("/.netlify/functions/saveNote", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ date: dateStr, note: newValue }),
        })
      } catch (error) {
        console.error("Error saving note:", error)
      }
    }
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
        </Box>
      )}
      <StaticDatePicker
        orientation="portrait"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </LocalizationProvider>
  )
}

export default CalendarComponent
