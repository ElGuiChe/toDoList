import Item from "../Item/Item";

export default function ItemList({ listaTareas }) {
  return listaTareas.map((item) => {
    return <Item item={item} key={item.id} />;
  });
}
