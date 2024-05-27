import * as React from "react"
import { useState, useEffect } from "react"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { toolbarClasses } from "@mui/material"

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null)
  const [notes, setNotes] = useState({})
  const [inputValue, setInputValue] = useState("")

  // Fetch notes from Netlify function on component mount
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch("/.netlify/functions/getNotes")
        const data = await response.json()
        setNotes(data)
        console.log("Notes fetched from Firestore:", data) // Consollogga värden från Firestore
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

    // Denna producerar ev ett object.
    // Testa att consollogga/kolla react dev tools. När blir staten ett object.
  }

  const handleInputChange = e => {
    const newValue = e.target.value
    setInputValue(newValue)
  }

  const handleBookButtonClick = async () => {
    if (selectedDate) {
      const dateStr = selectedDate.format("YYYY-MM-DD")
      const updatedNotes = {
        ...notes,
        [dateStr]: inputValue,
      }
      setNotes(updatedNotes)

      localStorage.setItem("notes", JSON.stringify(updatedNotes))

      console.log("Data to be saved to Firestore:", {
        date: dateStr,
        note: inputValue,
      }) // Consollogga datan som ska sparas till Firestore

      try {
        const response = await fetch("/.netlify/functions/saveNote", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ date: dateStr, note: inputValue }),
          // Sätt fler fält från flera inputs med kommatecken
        })
        const result = await response.json()
        console.log("Result from saving note to Firestore:", result) // Consollogga resultatet från sparandet till Firestore
      } catch (error) {
        console.error("Error saving note:", error)
      }
    }
  }

  // Uncomment this section if you want to use Firebase Firestore directly
  // const handleBookButtonClick = async () => {
  //   if (selectedDate) {
  //     const dateStr = selectedDate.format("YYYY-MM-DD")
  //
  //     try {
  //       await addDoc(collection(db, "bookings"), {
  //         date: dateStr,
  //         booking: inputValue,
  //       })
  //       console.log("Booking added successfully!")
  //
  //       // Lägg till en konsollogg för att visa den nya bokningen
  //       console.log("New booking:", {
  //         date: dateStr,
  //         booking: inputValue,
  //       })
  //     } catch (error) {
  //       console.error("Error adding booking:", error)
  //     }
  //   }
  // }

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
            {date}: {/*JSON.stringify(booking)*/ booking.note}
          </Typography>
        ))}
      </Box>
    </LocalizationProvider>
  )
}

export default CalendarComponent
