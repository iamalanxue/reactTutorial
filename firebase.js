import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBX0N2GeG-Az89p_1UuMCQZywp2HI_8jHk",
    authDomain: "scheduler-e7111.firebaseapp.com",
    databaseURL: "https://scheduler-e7111-default-rtdb.firebaseio.com",
    projectId: "scheduler-e7111",
    storageBucket: "scheduler-e7111.appspot.com",
    messagingSenderId: "266264231582",
    appId: "1:266264231582:web:5dff5de1afb83e160f858f",
    measurementId: "G-2C2DJPQ1YY"
  };

firebase.initializeApp(firebaseConfig);

export { firebase }; 