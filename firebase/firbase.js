import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBqtrmIGAJBknV9_71kuN5r8PiKnlXBi3Y",
  authDomain: "noi-farm-1072d.firebaseapp.com",
  databaseURL: "https://noi-farm-1072d-default-rtdb.firebaseio.com",
  projectId: "noi-farm-1072d",
  storageBucket: "noi-farm-1072d.appspot.com",
  messagingSenderId: "427165005080",
  appId: "1:427165005080:web:af38b4e23e853ad7e51a6d",
  measurementId: "G-N2089JMBZ7"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const sendValueToFirebase = async (value) => {
  try {
    await set(ref(database, '/Node1/Zone1/Valve'), value);
    console.log('Value sent to Firebase');
  } catch (error) {
    console.error('Error sending value to Firebase: ', error);
    throw error;
  }
};
const sendValueToFirebase1 = async (value) => {
  try {
    await set(ref(database, '/Node1/Zone2/Valve'), value);
    console.log('Value sent to Firebase');
  } catch (error) {
    console.error('Error sending value to Firebase: ', error);
    throw error;
  }
};
const sendValueToFirebase2 = async (value) => {
  try {
    await set(ref(database, '/Node1/Zone3/Valve'), value);
    // console.log('Value sent to Firebase');
  } catch (error) {
    console.error('Error sending value to Firebase: ', error);
    throw error;
  }
};
const sendValueToFirebase3 = async (value) => {
  try {
    await set(ref(database, '/Node2/Zone1/Valve'), value);
    console.log('Value sent to Firebase');
  } catch (error) {
    console.error('Error sending value to Firebase: ', error);
    throw error;
  }
};
const sendValueToFirebase4 = async (value) => {
  try {
    await set(ref(database, '/Node2/Zone2/Valve'), value);
    console.log('Value sent to Firebase');
  } catch (error) {
    console.error('Error sending value to Firebase: ', error);
    throw error;
  }
};
// ตั้งค่าsensorเพื่อเปิดปิดน้ำ
// const setSensormode1 = async (value) => {
//   try {
//     await set(ref(database, '/Node1/Zone1/ModeSensor'), value);
//     console.log('Value sent to Firebase');
//   } catch (error) {
//     console.error('Error sending value to Firebase: ', error);
//     throw error;
//   }
// };
// const dbRef = firebase.database().ref();
export { database, sendValueToFirebase,sendValueToFirebase1,sendValueToFirebase2,sendValueToFirebase3,sendValueToFirebase4 };
