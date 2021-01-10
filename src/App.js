import React, { Component } from "react";
import TodoItem from "./components/TodoItem";
import data from "./data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoData: data,
    };

    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          todoData: json,
        });
      });
  }

  toggleCompleted(id) {
    console.log("Toggled ", id);
    this.setState((prevState) => {
      const updatedState = prevState.todoData.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });

      return { todoData: updatedState };
    });
  }

  render() {
    let items = this.state.todoData.map((item) => {
      return (
        <TodoItem
          text={item.title}
          toggleCompleted={this.toggleCompleted}
          completed={item.completed}
          key={item.id}
          todoId={item.id}
        />
      );
    });

    return <div className="todolist-container">{items}</div>;
  }
}

export default App;
