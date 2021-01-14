import React, { useState, useEffect } from "react";
import TodoItem from "./components/TodoItem";
import data from "./data";

function App() {
  const [todoData, setTodoData] = useState(data);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    //COmpnent did Update
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
      .then((response) => response.json())
      .then((json) => {
        setTodoData(json);
      });
  }, []);

  function toggleCompleted(id) {
    setTodoData((todoData) => {
      return todoData.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
    });
  }

  function handleChange(e) {
    e.preventDefault();
    setNewTodo(e.target.value);
  }

  const addTodo = (e) => {
    e.preventDefault();

    const newTodoItem = {
      id: todoData.length + 1,
      title: newTodo,
      completed: false,
    };

    setTodoData([...todoData, newTodoItem]);
    setNewTodo("");
  };

  let items = todoData.map((item) => {
    return (
      <TodoItem
        text={item.title}
        toggleCompleted={toggleCompleted}
        completed={item.completed}
        key={item.id}
        todoId={item.id}
      />
    );
  });

  return (
    <div>
      <div className="todolist-container">
        <form className="todolist-add">
          <input
            placeholder="Enter New Item"
            value={newTodo}
            onChange={handleChange}
          />
          <button onClick={addTodo}>Add</button>
        </form>
        {items}
      </div>
    </div>
  );
}

//class App extends Component {
//constructor() {
//super();
//this.state = {
//todoData: data,
//newTodo: "",
//};

//this.toggleCompleted = this.toggleCompleted.bind(this);
//this.handleChange = this.handleChange.bind(this);
//}

//componentDidMount() {
//fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
//.then((response) => response.json())
//.then((json) => {
//this.setState({
//todoData: json,
//});
//});
//}

//toggleCompleted(id) {
//console.log("Toggled ", id);
//this.setState((prevState) => {
//const updatedState = prevState.todoData.map((item) => {
//if (item.id === id) {
//return {
//...item,
//completed: !item.completed,
//};
//}
//return item;
//});

//return { todoData: updatedState };
//});
//}

//handleChange(e) {
//e.preventDefault();
//this.setState({
//newTodo: e.target.value,
//});
//}

//addTodo = (e) => {
//e.preventDefault();

//const newTodoItem = {
//id: this.state.todoData.length + 1,
//title: this.state.newTodo,
//completed: false,
//};

//this.setState((prevState) => {
//return { todoData: [...prevState.todoData, newTodoItem], newTodo: "" };
//});
//};

//render() {
//let items = this.state.todoData.map((item) => {
//return (
//<TodoItem
//text={item.title}
//toggleCompleted={this.toggleCompleted}
//completed={item.completed}
//key={item.id}
//todoId={item.id}
///>
//);
//});

//return (
//<div>
//<div className="todolist-container">
//<form className="todolist-add">
//<input
//placeholder="Enter New Item"
//value={this.state.newTodo}
//onChange={this.handleChange}
///>
//<button onClick={this.addTodo}>Add</button>
//</form>
//{items}
//</div>
//</div>
//);
//}
//}

export default App;
