import ItemList from "../ItemList/ItemList";
import { useContext } from "react";

import { ListContext } from "../ListContext/ListContext";

export default function ItemListContainer() {

  const {tasks} = useContext(ListContext)
  console.log(tasks)

  return (
    <>
      <ItemList listaTareas={tasks} />
    </>
  );
}
