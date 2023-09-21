// parent component - App.jsx
// import Header from "../public/Header";
// import Button from "./components/Button";
import "./App.css";
import { useState } from "react";
import Todo from "./components/Todo"; // Todo 컴포넌트 import

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      content: "리액트 공부하기",
      isDone: true,
    },
    {
      id: 2,
      title: "자바스크립트 공부하기",
      content: "자바스크립트 공부하기",
      isDone: false,
    },
  ]);

  //제목 내용 입력
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const contentChangeHandler = (e) => {
    setContent(e.target.value);
  };

  //추가하기 버튼
  const clickAddButtonHandler = () => {
    // 입력값이 둘 중 하나라도 공백이면 아무것도 하지 않음
    if (title.trim() === "" || content.trim() === "") {
      return;
    }
    const newTodo = {
      id: todos.length + 1,
      title: title,
      content: content,
      isDone: false,
    };
    // 새로운 할 일을 추가한 후 입력창 비우기
    setTodos([...todos, newTodo]);
    setTitle(""); // 제목 입력창 비우기
    setContent(""); // 내용 입력창 비우기
  };

  //삭제 버튼 클릭(x)
  const clickRemoverButtonHandler = (id) => {
    const newTodos = todos.filter(function (todo) {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  //완료버튼
  const clickUpdateButtonHandler = (id) => {
    const clickUpdateButtonHandler = todos.map((item) => {
      if (item.id === id) {
        item = { ...item, isDone: !item.isDone };
      }
      return item;
    });
    setTodos(clickUpdateButtonHandler);
  };

  return (
    <div>
      <div>
        <div>My Todo List</div>
        <div>React</div>
      </div>

      <div className="input">
        제목 &nbsp;
        <input value={title} type="text" onChange={titleChangeHandler} />
        {title}
        내용 &nbsp;
        <input value={content} type="text" onChange={contentChangeHandler} />
        {content}
        <button onClick={clickAddButtonHandler}>추가</button>
      </div>

      <div>
        <div>
          <h1>Working...🔥</h1>
        </div>
        {todos
          .filter((item) => !item.isDone)
          .map(function (item) {
            return (
              <Todo
                key={item.id}
                item={item}
                clickRemoverButtonHandler={() =>
                  clickRemoverButtonHandler(item.id)
                }
                clickUpdateButtonHandler={() =>
                  clickUpdateButtonHandler(item.id)
                }
              />
            );
          })}

        <div>
          <h1>Done..! 🎉</h1>
        </div>
        {todos
          .filter((item) => item.isDone)
          .map((item) => (
            <Todo
              key={item.id}
              item={item}
              clickRemoverButtonHandler={() =>
                clickRemoverButtonHandler(item.id)
              }
              clickUpdateButtonHandler={() => clickUpdateButtonHandler(item.id)}
            />
          ))}
      </div>
    </div>
  );
}
