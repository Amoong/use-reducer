import React, { useReducer } from "react";

const INCREMENT = "increment";
const DECREMENT = "decrement";

type Action = { type: typeof INCREMENT } | { type: typeof DECREMENT };
interface IStateProps {
  count: number;
}

const reducer = (state: IStateProps, action: Action): IStateProps => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div className="App">
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: INCREMENT })}>Add</button>
      <button onClick={() => dispatch({ type: DECREMENT })}>Sub</button>
    </div>
  );
}

export default App;
