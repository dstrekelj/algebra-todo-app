import { createContext, useEffect, useState } from "react";
import { Item } from "../models/Item";

export const ItemsContext = createContext();

export function ItemsProvider(props) {
  const [items, setItems] = useState([]);
  const [initialized, setInitialized] = useState(false);

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

  useEffect(() => {
    if (initialized) return;

    const storedItems = window.localStorage.getItem('todo-app');

    if (storedItems === null) {
      setInitialized(true);

      return;
    }

    const itemObjects = JSON.parse(storedItems);

    if (!Array.isArray(itemObjects)) {
      setInitialized(true);

      return;
    }

    const items = itemObjects.map(item => Item.fromObject(item));

    setItems(items);
    setInitialized(true);
  }, [setItems, initialized, setInitialized]);

  useEffect(() => {
    if (!initialized) return;

    window.localStorage.setItem('todo-app', JSON.stringify(items));
  }, [items, initialized]);

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