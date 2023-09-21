// import React from "react";

// const Todo = ({
//   item,
//   clickRemoverButtonHandler,
//   clickUpdateButtonHandler,
// }) => {
//   return (
//     <div key={item.id} className="component-style">
//       <h4>{item.title}</h4>
//       <p>{item.content}</p>
//       <button onClick={clickRemoverButtonHandler}>X</button>
//       <button onClick={clickUpdateButtonHandler}>
//         {item.isDone ? "취소" : "완료"}
//       </button>
//     </div>
//   );
// };

// export default Todo;

import React from "react";

const Todo = ({
  item,
  clickRemoverButtonHandler,
  clickUpdateButtonHandler,
}) => {
  let buttonText;
  if (item.isDone) {
    buttonText = "취소";
  } else {
    buttonText = "완료";
  }

  return (
    <div key={item.id} className="component-style">
      <h4>{item.title}</h4>
      <p>{item.content}</p>
      <button onClick={clickRemoverButtonHandler}>X</button>
      <button onClick={clickUpdateButtonHandler}>{buttonText}</button>
    </div>
  );
};

export default Todo;
