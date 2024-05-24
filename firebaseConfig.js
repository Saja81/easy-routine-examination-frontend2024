import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

export const firebaseConfig = {
  apiKey: "AIzaSyB7JwO6IKYWX_TWha2H5pGK9mY2r_yOdXA",
  authDomain: "easy-routine.firebaseapp.com",
  projectId: "easy-routine",
  storageBucket: "easy-routine.appspot.com",
  messagingSenderId: "946342461835",
  appId: "1:946342461835:web:bb118233ffe29fe2912f8e",
  measurementId: "G-M0DDJV7YHV",
}

export const firebaseApp = initializeApp(firebaseConfig)
export const db = getFirestore(firebaseApp)
