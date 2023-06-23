import "./App.css";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import AddItem from "./AddItem/AddItem"

function App() {
  return (
    <div className="container">
      <AddItem/>
      <ItemListContainer />

      
    </div>
  );
}

export default App;
