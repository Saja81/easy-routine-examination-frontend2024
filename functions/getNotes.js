const { db } = require("./firebase")

exports.handler = async function (event, context) {
  try {
    const notesSnapshot = await db.collection("notes").get()
    const notes = {}
    notesSnapshot.forEach(doc => {
      notes[doc.id] = doc.data()
    })

    return {
      statusCode: 200,
      body: JSON.stringify(notes),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to get notes",
        details: error.message,
      }),
    }
  }
}
