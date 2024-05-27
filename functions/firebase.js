const admin = require("firebase-admin")
const serviceAccount = require(`.env.${process.env.GATSBY_GOOGLE_APPLICATION_CREDENTIALS}`)
// const serviceAccount = require("./keys/serviceAccountKey.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://easyroutine.netlify.app/",
})

const db = admin.firestore()
module.exports = { admin, db }
