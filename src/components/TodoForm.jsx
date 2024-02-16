import React, { useState } from "react";
import { FaCheck, FaTrash } from "react-icons/fa";
  

const Todo = (props) => {
    const [completed, setCompleted] = useState(false);
  
    const handleComplete = () => {
      setCompleted(!completed);
    };
  
    return (
      <div id="todo">
        <FaCheck onClick={handleComplete} />
        <h3 style={{ textDecoration: completed ? "line-through" : "none" }}>
          {props.todo.title} 
        </h3>
        <FaTrash
          className="remove"
          onClick={() => props.removeTodo(props.todo.id)} 
          style={ {color: "red"} }
        />
      </div>
    );
  };
  
  const TodoList = () => {
      const [todos, setTodos] = useState([]);
      const [nextId, setNextId] = useState(1); 
    
      const addTodo = (todoTitle) => {
        const newTodo = { id: nextId, title: todoTitle, completed: false };
        setTodos([newTodo, ...todos]);
        setNextId(nextId + 1); 
      };
    
      const removeTodo = (id) => { 
        setTodos(todos.filter((todo) => todo.id !== id)); 
      };
    
      return (
        <div id="todolist">
          <TodoForm addTodo={addTodo} />
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} />
          ))}
        </div>
      );
    };
  
  
const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = () => {
    addTodo(title);
    setTitle("");
  };

  return (
    <div id="content">
      <div className="form">
        <h1>My To Do List</h1>
        <div>
          <input
            type="text"
            placeholder="Title...."
            className="title"
            value={title}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
