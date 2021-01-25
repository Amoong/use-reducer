import React, { useReducer, useState } from "react";
import { v4 } from "uuid";

const ADD = "add";
const DEL = "del";

type Action =
  | { type: typeof ADD; payload: ToDo }
  | { type: typeof DEL; payload: string };

interface ToDo {
  text: string;
  id: string;
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
      const { text, id } = action.payload;
      return { toDos: [...state.toDos, { text, id }] };
    case DEL:
      return { toDos: state.toDos.filter(toDo => toDo.id !== action.payload) };
    default:
      throw new Error();
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newToDo, setNewToDo] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: ADD, payload: { text: newToDo, id: v4() } });
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
        {state.toDos.map((item: ToDo) => (
          <li key={item.id}>
            <span>{item.text}</span>
            <button onClick={() => dispatch({ type: DEL, payload: item.id })}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
