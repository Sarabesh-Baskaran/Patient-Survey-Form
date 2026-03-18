import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAml80dC_ox3XZyTz7V4bh8Vo1mayovm18",
    authDomain: "patient-survey-form.firebaseapp.com",
    projectId: "patient-survey-form",
    storageBucket: "patient-survey-form.firebasestorage.app",
    messagingSenderId: "258876877078",
    appId: "1:258876877078:web:90510569f6280f99fb8837"
  };

// Initialize
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Form submit
document.getElementById("patientForm").addEventListener("submit", async function(e){
  e.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const disease = document.getElementById("disease").value;
  const city = document.getElementById("city").value;

  try {
    await addDoc(collection(db, "patients"), {
      name, age, gender, phoneNumber, disease, city
    });

    alert("Patient data submitted successfully ✅");
    document.getElementById("patientForm").reset();

  } catch (error) {
    console.error("Error adding document: ", error);
  }
});