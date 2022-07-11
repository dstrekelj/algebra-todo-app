import { ItemForm } from "./components/ItemForm";
import { useState } from "react";
import { Item } from "./models/Item";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (itemFormData) => {
    const item = new Item(itemFormData.item);
    setItems((state) => [ ...state, item ]);
  }

  const itemElements = items.map((item) => (
    <div key={item.id}>
      <input type="checkbox" name="" id="" />
      <span>{item.text}</span>
      <button type="button">Delete</button>
    </div>
  ));

  return (
    <div>
      <div>
        <ItemForm onSubmit={addItem} />
      </div>
      <div>
        {itemElements}
      </div>
    </div>
  );
}

export default App;
