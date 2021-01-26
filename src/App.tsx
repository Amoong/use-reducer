import React, { useReducer, useState } from "react";
import reducer, { initialState, ADD, DEL, ToDo } from "./reducer";
import { v4 } from "uuid";

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
            <button onClick={() => dispatch({ type: DEL, payload: item.id })}>
              ✅
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {state.completed.length !== 0 && <h2>Completed</h2>}
        {state.completed.map((item: ToDo) => (
          <li key={item.id}>
            <span>{item.text}</span>
            <button onClick={() => dispatch({ type: DEL, payload: item.id })}>
              ❌
            </button>
            <button onClick={() => dispatch({ type: DEL, payload: item.id })}>
              💔
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
