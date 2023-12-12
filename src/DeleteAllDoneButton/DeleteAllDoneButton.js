import { useContext } from "react";
import { ListContext } from "../ListContext/ListContext";

export default function DeleteAllDoneButton() {

  const {deleteAllDoneButton} = useContext(ListContext)

  return (
    <button type="button" className="btn btn-danger" onClick={deleteAllDoneButton}>
      Borrar Tareas Terminadas
    </button>
  );
}
