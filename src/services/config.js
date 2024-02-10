
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
//vamos a importar dos funciones del modulo FIrebase.
//InitializeApp: inicial la conexion con firebase
//getFirestore: me permite obtener una instancia del firestore. 

//Esto es un objeto con nuestra info de la cuenta. 
// Se incluye la key personal para acceder a la base de datos. 


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE_CONFIG,
  authDomain: "productosbusqueda.firebaseapp.com",
  projectId: "productosbusqueda",
  storageBucket: "productosbusqueda.appspot.com",
  messagingSenderId: "12437204011",
  appId: "1:12437204011:web:c64d83c82dfdfe02e98e6e",
  measurementId: "G-H0K6BFM01H"
};

// inicializamos Firebase y se pasa la configuracion como argumento, esto me devuelve una instancia de Firebase.
const app = initializeApp(firebaseConfig);

//ahora uso esa instancia para obtener el servicio de irestore: 

export const db = getFirestore(app);