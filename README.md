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
