import React, { ReactHTMLElement, useState } from "react";

const Home = () => {
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState<string[]>([]);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e);
    setToDos((oldToDos) => [...oldToDos, text]);
  };
  return (
    <>
      <h1>ToDoList</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.currentTarget.value);
          }}
        />
        <button>등록</button>
      </form>
      <ul>
        {toDos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </>
  );
};
export default Home;
