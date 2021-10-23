import React from "react";
import "./App.css";

function Todo(props) {
  return (
    <div style={{textDecoration: props.todo.completed ? 'line-through' : 'none'}} className="todo">
      <p>{props.todo.name}</p>
      <button onClick={()=> props.completeTodo(props.index)}>Completa</button>
    </div>
  );
}
export default Todo;
