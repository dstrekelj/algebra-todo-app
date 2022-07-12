export function ItemList(props) {
  const itemElements = props.items.map((item) => (
    <div key={item.id}>
      <input type="checkbox" name="" id="" />
      <span>{item.text} ({item.displayCreatedAt()})</span>
      <button type="button">Delete</button>
    </div>
  ));

  return (
    <div>
      {itemElements}
    </div>
  );
}
