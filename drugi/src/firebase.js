
//Importujemy firebase
import firebase from "firebase";
//Config połączeniowy z bazą firebase
const firebaseConfig = {
    apiKey: "AIzaSyCsQ1PcFpTinnCHZ0QeatNofCqQcppbZUY",
    authDomain: "twotter-a57a4.firebaseapp.com",
    databaseURL: "https://twotter-a57a4.firebaseio.com",
    projectId: "twotter-a57a4",
    storageBucket: "twotter-a57a4.appspot.com",
    messagingSenderId: "352693073025",
    appId: "1:352693073025:web:d2d765540170390b2c0980",
    measurementId: "G-PBN4VBP5JK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
//Przypisanie połączenia
const db = firebaseApp.firestore();
export default db;

