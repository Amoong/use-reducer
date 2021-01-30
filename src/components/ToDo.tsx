import React from "react";
import { COMPLETE, DEL, UNCOMPLETE } from "../Actions";
import { useDispatch } from "../context";

interface IToDo {
  text: string;
  id: string;
  isCompleted?: boolean;
}

function ToDo({ text, id, isCompleted }: IToDo) {
  const dispatch = useDispatch();

  return (
    <li>
      <span>{text}</span>
      <button onClick={() => dispatch({ type: DEL, payload: id })}>❌</button>
      <button
        onClick={() =>
          dispatch({
            type: isCompleted ? UNCOMPLETE : COMPLETE,
            payload: id,
          })
        }
      >
        {isCompleted ? "💦" : "✅"}
      </button>
    </li>
  );
}

export default ToDo;
