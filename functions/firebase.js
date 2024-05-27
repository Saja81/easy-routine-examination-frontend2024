const admin = require("firebase-admin")
const serviceAccount = require("./keys/serviceAccountKey.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://easyroutine.netlify.app/",
})

const db = admin.firestore()
module.exports = { admin, db }
