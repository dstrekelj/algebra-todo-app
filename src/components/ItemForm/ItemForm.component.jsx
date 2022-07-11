export function ItemForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input type="text" placeholder="TODO: Buy milk"
        name="item" value={props.value} onChange={props.onChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
