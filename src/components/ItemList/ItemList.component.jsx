export function ItemList(props) {
  const itemElements = props.items.map((item) => (
    <div key={item.id}>
      <input type="checkbox"
        checked={item.isDone}
        onChange={props.onMarkAsDone(item)}
      />
      <span>{item.text} ({item.displayCreatedAt()})</span>
      {item.isDone &&
        <span>&mdash; Completed at: {item.displayCompletedAt()}</span>
      }
      <button type="button" onClick={props.onDelete(item)}>
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
