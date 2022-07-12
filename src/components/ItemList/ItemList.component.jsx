import { useContext } from "react";
import { ItemsContext } from "../../contexts/ItemsContext";

export function ItemList() {
  const context = useContext(ItemsContext);

  const itemElements = context.items.map((item) => (
    <div key={item.id}>
      <input type="checkbox"
        checked={item.isDone}
        onChange={context.markItemAsDone(item)}
      />
      <span>{item.text} ({item.displayCreatedAt()})</span>
      {item.isDone &&
        <span>&mdash; Completed at: {item.displayCompletedAt()}</span>
      }
      <button type="button" onClick={context.deleteItem(item)}>
        Delete
      </button>
    </div>
  ));

  return (
    <div>
      {itemElements}
    </div>
  );
}
