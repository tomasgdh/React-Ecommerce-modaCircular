// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRvYt477_Rq8moDogULfcuamHxygLLtno",
  authDomain: "fb-ecommercemodacircular.firebaseapp.com",
  projectId: "fb-ecommercemodacircular",
  storageBucket: "fb-ecommercemodacircular.appspot.com",
  messagingSenderId: "536555880580",
  appId: "1:536555880580:web:149d0926113013d86c82d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);