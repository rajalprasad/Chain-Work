// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getFirestore, collection, addDoc
} from 'firebase/firestore';
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyyaMMEfp-C8vDiDk97O2L_oYDwtHzMOs",
  authDomain: "chain-work-d53a1.firebaseapp.com",
  projectId: "chain-work-d53a1",
  storageBucket: "chain-work-d53a1.appspot.com",
  messagingSenderId: "734540800007",
  appId: "1:734540800007:web:7e99a578188d3034384aa2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

// Initialize services
const db = getFirestore();

// Collection reference
const colRef = collection(db, 'Jobs')

export async function addJobToDB(jobDescription, pay, nullAddress) {
    const id = await addDoc(colRef, {
        Job_Description: jobDescription,
        Pay_in_Eth: pay,
        completed: false,
        Worker_Address: nullAddress
    })
    return id.id;
}