import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCXJg81jC7tGTvPcjQpDd4393_V6RdKB2E",
  authDomain: "otp-project-a4e84.firebaseapp.com",
  projectId: "otp-project-a4e84",
  storageBucket: "otp-project-a4e84.appspot.com",
  messagingSenderId: "264259739714",
  appId: "1:264259739714:web:818aa5c1f30ef9e7d04ddb",
  measurementId: "G-GG1Z7EEYQQ"
};

const app = initializeApp(firebaseConfig);


export const auth= getAuth(app);
