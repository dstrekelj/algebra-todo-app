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

  const deleteItem = (deletedItem) => {
    return () => {
      setItems((state) => state.filter(
        item => item.id !== deletedItem.id
      ));
    };
  }

  const markItemAsDone = (markedItem) => {
    return () => {
      markedItem.toggleDone();
      setItems((state) => [ ...state ]);
    };
  }

  return (
    <div>
      <ItemForm onSubmit={addItem} />
      <ItemList
        items={items}
        onDelete={deleteItem}
        onMarkAsDone={markItemAsDone}
      />
    </div>
  );
}

export default App;
