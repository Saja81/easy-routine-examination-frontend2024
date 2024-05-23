const fs = require("fs")
const path = require("path")

exports.handler = async function (event, context) {
  const notesFile = path.join(__dirname, "../../data/notes.json")

  if (!fs.existsSync(notesFile)) {
    return {
      statusCode: 200,
      body: JSON.stringify({}),
    }
  }

  const notes = JSON.parse(fs.readFileSync(notesFile, "utf8"))

  return {
    statusCode: 200,
    body: JSON.stringify(notes),
  }
}
