import React from "react";

function TodoItem(props) {
  const completedStyles = { textDecoration: "line-through" };
  return (
    <div className="todoitem">
      <input
        type="checkbox"
        onChange={() => props.toggleCompleted(props.todoId)}
        checked={props.completed}
        id={props.todoId}
      ></input>
      <label
        htmlFor={props.todoId}
        style={props.completed ? completedStyles : null}
      >
        {props.text}
      </label>
    </div>
  );
}

export default TodoItem;
