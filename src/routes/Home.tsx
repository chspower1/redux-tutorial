import React, { useState } from "react";
import { addToDo, addUser } from "../store/configureStore";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const Home = () => {
  const toDos = useAppSelector((state) => state.toDo.value);
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addUser({ id: 1, toDo: "sad", date: "asd" }));
  };
  return (
    <>
      <h1>ToDoList</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={(e) => setText(e.currentTarget.value)} />
        <button>등록</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.toDo}</li>
        ))}
      </ul>
    </>
  );
};

export default Home;
