
import { useContext } from "react";
import { ListContext } from "../ListContext/ListContext";

export default function Item({ item }) {

  const { clickCheck, deleteItem } = useContext(ListContext)

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
              onChange={(e) => {
                clickCheck(e)
              }}
              checked={false}
              readOnly={true}
            />
          ) : (
            <input
              type="checkbox"
              id={item.id}
              className="checkbox justify-content-start"
              value=""
              onChange={(e) => {
                clickCheck(e)
              }}
              checked={true}
            />
          )}
        </div>

        <div className="col-10">
          {item.status === "pendiente" ? (
            <p> {item.task} </p>
          ) : (
            <p className="text-muted">
              {" "}
              <s> {item.task} </s>{" "}
            </p>
          )}
        </div>

        <div className="col-1">
        <button type="button" className="btn btn-outline-danger" id={item.id} onClick={(e) => {deleteItem(e)}}>
        <i className="bi bi-trash" id={item.id}></i>
        </button>

        </div>

      </div>
    </div>
  );
}