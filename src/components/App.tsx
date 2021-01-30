import React from "react";
import Add from "./Add";
import { useState } from "../context";
import List from "./List";
import ToDo from "./ToDo";
import { IToDo } from "../reducer";

function App() {
  const { toDos, completed } = useState();
  return (
    <div className="App">
      <Add />
      <List name="To do">
        {toDos.map((item: IToDo) => (
          <ToDo key={item.id} id={item.id} text={item.text} />
        ))}
      </List>
      <List name={completed.length ? "Completed" : ""}>
        {completed.map((item: IToDo) => (
          <ToDo key={item.id} id={item.id} text={item.text} isCompleted />
        ))}
      </List>
    </div>
  );
}

export default App;
