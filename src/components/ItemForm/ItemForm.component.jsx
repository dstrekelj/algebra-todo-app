export function ItemForm(props) {
  return (
    <form onSubmit={props.onSubmit} autoComplete="off">
      <input type="text" placeholder="TODO: Buy milk"
        name="item" value={props.value} onChange={props.onChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}
