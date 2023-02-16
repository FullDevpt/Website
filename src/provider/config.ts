import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


export const config = {
    firebaseConfig: {
        apiKey: "AIzaSyArAmAv7ecLf0ABBrDBTWzQ6U62MlKgBl0",
        authDomain: "cantina-system.firebaseapp.com",
        projectId: "cantina-system",
        storageBucket: "cantina-system.appspot.com",
        messagingSenderId: "434134657374",
        appId: "1:434134657374:web:d8042f530f3709d35707cf",
    }
};

export const app = initializeApp(config.firebaseConfig);

export const db = getFirestore(app);

export { getFirestore };
