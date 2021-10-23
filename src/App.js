import React, {useState} from 'react';
import Todo from './TodoComponent';
import Form from './FormComponent';
import './App.css';




const App = () => {
 const [todos,setTodos] = useState([
      {name: 'imparare React', completed: true},
      {name: 'imparare gli state', completed: false},
      {name: 'imparare i component', completed: true},
 ]);
   

  const addTodo = (todo) => {
    const newTodos = [...todos, {name: todo}];
    setTodos(newTodos)
  }
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos)
  }
 
    return (
      <div className="App">
        <div className="todo-list">
        {todos.map((item, index) => (
          <Todo key={index} todo={item} index={index} completeTodo={completeTodo}/>
        ))}
        <Form submit={addTodo}/>
        </div>
      </div>
    )
  
}

export default App;
