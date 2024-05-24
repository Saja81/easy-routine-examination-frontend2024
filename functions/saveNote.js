const fs = require("fs")
const path = require("path")

exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Only POST requests are allowed" }),
    }
  }

  const { date, note } = JSON.parse(event.body)

  // Path to your JSON file
  const filePath = path.resolve(__dirname, "..", "notes.json")

  // Read the existing notes
  let notes = {}
  if (fs.existsSync(filePath)) {
    notes = JSON.parse(fs.readFileSync(filePath, "utf-8"))
  }

  // Update the notes
  notes[date] = note

  // Write the updated notes back to the file
  fs.writeFileSync(filePath, JSON.stringify(notes, null, 2))

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Note saved successfully" }),
  }
}
