import React from "react";

function TodoItem(props) {
  return (
    <div className="todoitem">
      <input type="checkbox" checked={props.completed}></input>
      <label>{props.text}</label>
    </div>
  );
}

export default TodoItem;
