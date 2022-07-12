import { createContext, useState } from "react";
import { Item } from "../models/Item";

export const ItemsContext = createContext();

export function ItemsProvider(props) {
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

  const getItems = ({ completed }) => {
    if (completed === true) {
      return items.filter(item => item.isDone);
    } else if (completed === false) {
      return items.filter(item => !item.isDone);
    } else {
      return items;
    }
  }

  const value = {
    items,
    addItem,
    deleteItem,
    markItemAsDone,
    getItems,
  };

  return (
    <ItemsContext.Provider value={value}>
      {props.children}
    </ItemsContext.Provider>
  );
}