import { ItemForm } from "./components/ItemForm";
import { useState } from "react";
import { Item } from "./models/Item";
import { ItemList } from "./components/ItemList";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (itemFormData) => {
    const item = new Item(itemFormData.item);
    setItems((state) => [ ...state, item ]);
  }

  return (
    <div>
      <ItemForm onSubmit={addItem} />
      <ItemList items={items} />
    </div>
  );
}

export default App;
