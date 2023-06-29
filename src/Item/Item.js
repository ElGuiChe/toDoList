import { doc, updateDoc, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { useEffect } from "react";

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

//const washingtonRef = doc(db, "tasks", "9nceLnScCbl7u4ChPM4T");

// Set the "capital" field of the city 'DC'
/*await updateDoc(washingtonRef, {status: "pendiente"});*/

export default function Item({ item }) {
  function clickCheck(e) {
    console.log(e.target.id);
    if (e.target.checked === true) {
      const docRef = doc(db, "tasks", e.target.id);
      updateDoc(docRef, { status: "terminado" }).then(
        () => {
          console.log("Promise resuelta");
          window.location.reload();
        },
        (error) => {
          console.log("Error al intentar llamar la base de datos", error);
        }
      );
    } else {
      const docRef = doc(db, "tasks", e.target.id);
      updateDoc(docRef, { status: "pendiente" }).then(
        () => {
          console.log("Promise resuelta");
          window.location.reload();
        },
        (error) => {
          console.log("Error al intentar llamar la base de datos", error);
        }
      );
    }
  }

  //useEffect((e) => {});

  return (
    <div className="container">
      <div className="row">
        <div className="col-1">
          {item.status === "pendiente" ? (
            <input
              type="checkbox"
              id={item.id}
              className="checkbox justify-content-start"
              value=""
              onChange={(e) => clickCheck(e)}
            />
          ) : (
            <input
              type="checkbox"
              id={item.id}
              className="checkbox justify-content-start"
              value=""
              onChange={(e) => clickCheck(e)}
              checked
            />
          )}
        </div>

        <div className="col-11">
          {item.status === "pendiente" ? (
            <p> {item.task} </p>
          ) : (
            <p className="text-muted">
              {" "}
              <s> {item.task} </s>{" "}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
