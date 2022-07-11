import { ItemForm } from "./components/ItemForm";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (itemFormData) => {
    setItems((state) => [ ...state, itemFormData ]);
  }

  const itemElements = items.map((item, index) => (
    <div key={index}>
      <input type="checkbox" name="" id="" />
      <span>{item.item}</span>
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
