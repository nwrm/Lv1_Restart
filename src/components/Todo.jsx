//child component - Todo.jsx

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
      <button onClick={clickUpdateButtonHandler}>완료</button>
    </div>
  );
};

export default Todo;
