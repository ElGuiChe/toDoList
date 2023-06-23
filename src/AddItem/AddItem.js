// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore, addDoc } from "firebase/firestore";

export default function AddItem() {
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

  // Add a new document with a random generated id.

  async function addTask(task) {
    const docRef = await addDoc(collection(db, "tasks"), {
      task: task,
      status: "pendiente",
    });
    console.log("Document written with ID: ", docRef.id);
    window.location.reload();
  }

  return (
    <>
      <h2>¿Que hace falta por hacer?</h2>
      <form
        onSubmit={(e, task) => {
          e.preventDefault();
          task = e.target.task.value;
          addTask(task);
        }}
      >
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Agrega tu tarea"
            name="task"
            required
          />

          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="submit">
              Agregar
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
