import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAmQ5_pulGLRMfvjfTx1nXW87xIGeJl4J8",

  authDomain: "bus-tracking-35630.firebaseapp.com",

  projectId: "bus-tracking-35630",

  storageBucket: "bus-tracking-35630.appspot.com",

  messagingSenderId: "435179695170",

  appId: "1:435179695170:web:a5ffe3317c3c55497811db"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
