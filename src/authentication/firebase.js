// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTsxLQivNu5GK-BnrE6TcB7qM_9zxjVCI",
  authDomain: "rideseva-18e8f.firebaseapp.com",
  projectId: "rideseva-18e8f",
  storageBucket: "rideseva-18e8f.appspot.com",
  messagingSenderId: "525002989572",
  appId: "1:525002989572:web:c08372df9924880c5c9551",
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
