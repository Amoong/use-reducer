import React, { useState } from "react";
import { ADD } from "../Actions";
import { v4 } from "uuid";
import { useDispatch } from "../context";
function Add() {
  const [newToDo, setNewToDo] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: ADD, payload: { text: newToDo, id: v4() } });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewToDo(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" />
    </form>
  );
}

export default Add;
