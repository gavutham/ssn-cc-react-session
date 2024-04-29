// src/components/App.js
import React, { useEffect, useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import TodoDetails from './components/TodoDetails';

const App = () => {
  const [todos, setTodos] = useState([]);

  const[completed, setCompleted] = useState(0);

  useEffect(()=>{
    var count = 0;

    todos.forEach((todo)=>{
      if(todo.completed) count +=1;
    })

    setCompleted(count)
  }, [todos])
  
  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">SSN To-Do List</h1>
      <TodoDetails completed={completed} total={todos.length} />
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
