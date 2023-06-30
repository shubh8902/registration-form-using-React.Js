import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBxwLgPUxH0jSL-jj3swj1uTdpCgutK7c8",
    authDomain: "registration-form-85863.firebaseapp.com",
    databaseURL: "https://registration-form-85863-default-rtdb.firebaseio.com",
    projectId: "registration-form-85863",
    storageBucket: "registration-form-85863.appspot.com",
    messagingSenderId: "692845370239",
    appId: "1:692845370239:web:207eed7ccbd922bb1fd84a",
    measurementId: "G-CWKT3RWFYB"
  };

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);