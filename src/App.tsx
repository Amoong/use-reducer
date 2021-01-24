import React, { useReducer, useState } from "react";

const ADD = "add";

type Action = { type: typeof ADD; payload: ToDo };

interface ToDo {
  text: string;
}
interface IStateProps {
  toDos: Array<ToDo>;
}

const initialState = {
  toDos: [],
};

const reducer = (
  state: IStateProps = initialState,
  action: Action,
): IStateProps => {
  switch (action.type) {
    case ADD:
      return { toDos: [...state.toDos, { text: action.payload.text }] };
    default:
      throw new Error();
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newToDo, setNewToDo] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: ADD, payload: { text: newToDo } });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewToDo(e.target.value);
  };

  return (
    <div className="App">
      <h1>To Dos</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" />
      </form>
      <ul>
        {state.toDos.map((item: ToDo, index: number) => (
          <li key={index}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
