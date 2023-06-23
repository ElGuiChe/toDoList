import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJBIwMx5cQnQoOk7JS4fS70gfrnxA6kYk",
  authDomain: "todolist-d823f.firebaseapp.com",
  projectId: "todolist-d823f",
  storageBucket: "todolist-d823f.appspot.com",
  messagingSenderId: "467522170401",
  appId: "1:467522170401:web:b42833f68cb0c8dae5bd60",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default function ItemListContainer() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const colRef = collection(db, "tasks");
    getDocs(colRef).then(
      (snapshot) => {
        const tasksArray = snapshot.docs.map((rawDoc) => {
          return {
            id: rawDoc.id,
            ...rawDoc.data(),
          };
        });
        setTasks(tasksArray);
      },
      (error) => {
        console.log("Error al intentar llamar la base de datos", error);
      }
    );
  }, []);

  return (
    <>
      <ItemList listaTareas={tasks} />
    </>
  );
}
