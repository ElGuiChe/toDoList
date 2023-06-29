import "./App.css";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import AddItem from "./AddItem/AddItem";
import DeleteButton from "./DeleteButton/DeleteButton";

function App() {
  return (
    <div className="container">
      <AddItem />
      <ItemListContainer />
      <DeleteButton/>
    </div>
  );
}

export default App;
