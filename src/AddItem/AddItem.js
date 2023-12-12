import { useContext } from "react";
import { ListContext } from "../ListContext/ListContext";

export default function AddItem() {
    const {addTaskDB} = useContext(ListContext)

  return (
    <>
      <h2>¿Que hace falta por hacer?</h2>
      <form
        onSubmit={(e, task) => {
          e.preventDefault();
          task = e.target.task.value;
          addTaskDB(task);
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
