const fs = require("fs")
const path = require("path")

exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    }
  }

  const { date, note } = JSON.parse(event.body)
  const notesFile = path.join(__dirname, "../../data/notes.json")

  let notes = {}
  if (fs.existsSync(notesFile)) {
    notes = JSON.parse(fs.readFileSync(notesFile, "utf8"))
  }

  notes[date] = note

  fs.writeFileSync(notesFile, JSON.stringify(notes, null, 2))

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Note saved" }),
  }
}
