import { ItemForm as Component } from "./ItemForm.component";
import { useState } from "react";

const initialState = { item: '' };

export function ItemForm(props) {
  const [ state, setState ] = useState(initialState);

  const updateState = (event) => {
    setState((state) => ({
      ...state, [event.target.name]: event.target.value,
    }));
  }

  const submitState = (event) => {
    event.preventDefault();

    if (typeof props.onSubmit === "function") {
      props.onSubmit(state);
    }

    setState(initialState);
  }

  return (
    <Component value={state.item} onChange={updateState}
      onSubmit={submitState}
    />
  );
}
