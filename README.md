제출버튼 개선

1. 공백시 제출버튼 작동이 안됨
2. 제출 후 입력창이 비워짐

```js
 //추가하기 버튼 변경 전
  const clickAddButtonHandler = () => {
    const newTodo = {
      id: todos.length + 1,
      title: title,
      content: content,
      isDone: false,
    };
      setTodos([...todos, newTodo]);
  };
```


```js
 //추가하기 버튼 변경후
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
```

완료버튼 개선

1. 완료를 누르면 Done 으로 넘어감 -> Done에서는 완료가 취소 버튼으로 텍스트가 바뀜

```js
//완료 버튼 변경전
import React from "react";

const Todo = ({
  item,
  clickRemoverButtonHandler,
  clickUpdateButtonHandler,
}) => {
  return (
    <div key={item.id} className="component-style">
      <h4>{item.title}</h4>
      <p>{item.content}</p>
      <button onClick={clickRemoverButtonHandler}>X</button>
      <button onClick={clickUpdateButtonHandler}>
      </button>
    </div>
  );
};

export default Todo;
```

```js
//완료 버튼 변경후
import React from "react";

const Todo = ({
  item,
  clickRemoverButtonHandler,
  clickUpdateButtonHandler,
}) => {
  return (
    <div key={item.id} className="component-style">
      <h4>{item.title}</h4>
      <p>{item.content}</p>
      <button onClick={clickRemoverButtonHandler}>X</button>
      <button onClick={clickUpdateButtonHandler}>
        {item.isDone ? "취소" : "완료"}  // if로 변경시 -> let buttonText; if (item.isDone) {buttonText = "취소";} else {buttonText = "완료";}
      </button>
    </div>
  );
};

export default Todo;
```
