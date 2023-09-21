//child component - Todo.jsx

const Todo = ({ item, clickRemoverButtonHandler }) => {
  return (
    <div key={item.id} classname="component-style">
      {item.title} - {item.content}
      <button onClick={clickRemoverButtonHandler}>X</button>
    </div>
  );
};

export default Todo;
