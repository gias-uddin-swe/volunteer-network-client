import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const intializeFirebase = () => {
  initializeApp(firebaseConfig);
};

export default intializeFirebase;
