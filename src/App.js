import "./App.css";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import AddItem from "./AddItem/AddItem";
import DeleteAllDoneButton from "./DeleteAllDoneButton/DeleteAllDoneButton";
import ListContext from "./ListContext/ListContext";

function App() {
  return (
    <div className="container">
      <ListContext>
        <AddItem />
        <ItemListContainer />
        <DeleteAllDoneButton/>
      </ListContext>
    </div>
  );
}

export default App;
