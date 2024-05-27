const { db } = require("./firebase")

exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Only POST requests are allowed" }),
    }
  }

  try {
    const { date, note } = JSON.parse(event.body)

    await db.collection("notes").doc(date).set({ note })

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Note saved successfully" }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to save note",
        details: error.message,
      }),
    }
  }
}
