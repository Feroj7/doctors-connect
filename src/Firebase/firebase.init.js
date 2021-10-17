import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const authInitialization = () => {
    initializeApp(firebaseConfig);
}

export default authInitialization;