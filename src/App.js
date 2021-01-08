import React from "react";
import TodoItem from "./components/TodoItem";
import data from "./data";

function App() {
  let items = data.map((item) => {
    return (
      <TodoItem text={item.text} completed={item.completed} key={item.id} />
    );
  });

  return <div className="todolist-container">{items}</div>;
}

export default App;
