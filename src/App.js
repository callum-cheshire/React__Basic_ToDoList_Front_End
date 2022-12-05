import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import data from "./data/data.json"
import Input from './Components/Input/input.js';
import Header from './Components/Header/header';
import ToDoList from "./Components/ToDoList/toDoList";

import './App.css';

function App() {
  const [toDoList, setToDoList] = useState(data);
  const [input, setInput] = useState("");


  function handleSubmit(e) {
    e.preventDefault();
    setToDoList([...toDoList, {
      id: uuidv4(),
      task: input,
      complete: false
    }]);
    setInput("");
  }

  function handleChange(e) {
    setInput(e.target.value)
    console.log(input);
  }

  function handleDelete() {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  

  function handleToggle(id) {
    let mapped = toDoList.map(todo => {
      return todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
    });
    setToDoList(mapped);
  }

  return (
    <div className="App">
      <div className="header-container">
        <Header />
      </div>
      <form className="input-container">
        <Input value={input} handleChange={handleChange} handleSubmit={(input) => handleSubmit(input)}/>
      </form>
      <div className="todo-list-container">
        <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleDelete={handleDelete}/>
      </div>
    </div>
  );
}

export default App;
