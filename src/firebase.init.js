// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:process.env.REACT_APP_apiKey,
//   authDomain:process.env.REACT_APP_authDomain,
//   projectId:process.env.REACT_APP_projectId,
//   storageBucket:process.env.REACT_APP_storageBucket,
//   messagingSenderId:process.env.REACT_APP_messagingSenderId,
//   appId:process.env.REACT_APP_appId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyCcAzHdidh9bTcGEDVLEdu-cSI-NEOcxmM",
  authDomain: "emazon-auth-59.firebaseapp.com",
  projectId: "emazon-auth-59",
  storageBucket: "emazon-auth-59.appspot.com",
  messagingSenderId: "318652513477",
  appId: "1:318652513477:web:f112e4f87602bff26a04ac"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
