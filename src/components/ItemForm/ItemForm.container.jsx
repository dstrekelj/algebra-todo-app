import { ItemForm as Component } from "./ItemForm.component";
import { useContext, useState } from "react";
import { ItemsContext } from "../../contexts/ItemsContext";

const initialState = { item: '' };

export function ItemForm() {
  const context = useContext(ItemsContext);
  const [ state, setState ] = useState(initialState);

  const updateState = (event) => {
    setState((state) => ({
      ...state, [event.target.name]: event.target.value,
    }));
  }

  const submitState = (event) => {
    event.preventDefault();
    context.addItem(state);
    setState(initialState);
  }

  return (
    <Component value={state.item} onChange={updateState}
      onSubmit={submitState}
    />
  );
}
