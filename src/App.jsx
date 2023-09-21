// parent component - App.jsx

import "./App.css";
import { useState } from "react";
import Todo from "./components/Todo"; // Todo 컴포넌트 import
import Button from "./components/Button";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "리액트 공부하기", content: "리액트 공부하기" },
    { id: 2, title: "자바스크립트 공부하기", content: "자바스크립트 공부하기" },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const contentChangeHandler = (e) => {
    setContent(e.target.value);
  };

  const clickAddButtonHandler = () => {
    const newTodo = {
      id: todos.length + 1,
      title: title,
      content: content,
    };
    setTodos([...todos, newTodo]);
  };

  //삭제 버튼 클릭(x)
  const clickRemoverButtonHandler = (id) => {
    const newTodos = todos.filter(function (todo) {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  return (
    <div>
      <div>
        <div className="input">
          제목 &nbsp;
          <input value={title} onChange={titleChangeHandler} />
          {title}
          내용 &nbsp;
          <input value={content} onChange={contentChangeHandler} />
          {content}
          <Button clickAddButtonHandler={clickAddButtonHandler}>추가</Button>
        </div>
      </div>
      <div className="app-style">
        {todos.map(function (item) {
          return (
            <Todo
              key={item.id}
              item={item}
              clickRemoverButtonHandler={() =>
                clickRemoverButtonHandler(item.id)
              }
            />
          );
        })}
      </div>
    </div>
  );
}
