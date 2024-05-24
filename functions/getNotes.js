const fs = require("fs")
const path = require("path")

exports.handler = async function (event, context) {
  // Path to your JSON file
  const filePath = path.resolve(__dirname, "..", "notes.json")

  // Read the existing notes
  let notes = {}
  if (fs.existsSync(filePath)) {
    notes = JSON.parse(fs.readFileSync(filePath, "utf-8"))
  }

  return {
    statusCode: 200,
    body: JSON.stringify(notes),
  }
}
