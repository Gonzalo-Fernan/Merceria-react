import merceria from "../public/merceria.json" assert { type: "json" }


import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, doc, collection } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDYQFHTPYjUrciYmwb6oN1po473zLZ_Ttw",
  authDomain: "otherness-merceria.firebaseapp.com",
  projectId: "otherness-merceria",
  storageBucket: "otherness-merceria.appspot.com",
  messagingSenderId: "790275389983",
  appId: "1:790275389983:web:1645719cf629d003b5732a"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

const productosRef = collection(db, "productos")

merceria.forEach(item => {
    delete item.id
    addDoc(productosRef, item)
});