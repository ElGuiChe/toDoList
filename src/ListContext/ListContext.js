import { createContext, useEffect, useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, updateDoc, addDoc, deleteDoc } from "firebase/firestore";

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

export const ListContext = createContext();

export default function ListCustomContext({ children }) {

  //Funciones para el componente ItemListContainer

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

        tasksArray.sort((a, b) => a.time - b.time);
        setTasks(tasksArray);
      },
      (error) => {
        console.log("Error al intentar llamar la base de datos", error);
      }
    );
  }, []);


  //Funciones para el componente Item

  //Funciones ligadas al checklist

  function clickCheck(e) {

    if (e.target.checked === true) {
      const docRef = doc(db, "tasks", e.target.id);
      updateDoc(docRef, { status: "terminado" }).then(
        () => {

          const newTasks = tasks.map((task) => {
            if (task.id === e.target.id) {
              return {
                ...task,
                status: "terminado",
              }
            }
            return task
          })
          setTasks(newTasks)
        },
        (error) => {
          console.log("Error al intentar llamar la base de datos", error);
        }
      );
    } else {
      const docRef = doc(db, "tasks", e.target.id);
      updateDoc(docRef, { status: "pendiente" }).then(
        () => {
          const newTasks = tasks.map((task) => {
            if (task.id === e.target.id) {
              return {
                ...task,
                status: "pendiente",
              }
            }
            return task
          })
          setTasks(newTasks)
        },
        (error) => {
          console.log("Error al intentar llamar la base de datos", error);
        }
      );
    }
  }

  //Funciones ligadas al botón de eliminación individual

  function deleteItem(e) {
    //Elimina el task y actualiza el UseState para refrercar el DOM del componente
    const newTasks = tasks.filter((task) => e.target.id !== task.id)
    setTasks(newTasks)
    //Elimina el task en la DB con de forma asincrona 
    deleteItemDB()
    async function deleteItemDB() {
      await deleteDoc(doc(db, "tasks", e.target.id));
    }
  }


  //Funciones para el componente AddItem

  async function addTaskDB(task) {

    const docRef = await addDoc(collection(db, "tasks"), {
      task: task,
      status: "pendiente",
      time: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
    //Se refresca toda la pagina porque el ID se asigna en el servidor. No usar useState
    window.location.reload();
  }

  //Funciones para el componente DeleteAllDoneButton

  function deleteAllDoneButton() {

    
    
    tasks.forEach(task => {
      const newTasks = tasks.filter((task) => task.status !== "terminado")
      setTasks(newTasks)

      if (task.status === "terminado"){
        async function deleteItemDB() {
          await deleteDoc(doc(db, "tasks", task.id));
        }
      deleteItemDB()
      }

    })
  }

  //Data que será proporcionada por el Context

  const data = { tasks, clickCheck, addTaskDB, deleteItem, deleteAllDoneButton }

  return (
    <ListContext.Provider value={data}> {children} </ListContext.Provider>
  )
}