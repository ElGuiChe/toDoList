import ItemList from "../ItemList/ItemList";
import { useContext } from "react";

import { ListContext } from "../ListContext/ListContext";

export default function ItemListContainer() {

  const {tasks} = useContext(ListContext)

  return (
    <>
      <ItemList listaTareas={tasks} />
    </>
  );
}
