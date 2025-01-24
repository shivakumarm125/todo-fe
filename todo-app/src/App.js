import React, { useState, useEffect } from 'react';
import { getTodos, createTodo, updateTodo, deleteTodo } from './api/Todos';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './style.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const { data } = await getTodos();
    setTodos(data);
  };

  const addTodo = async (todo) => {
    const { data } = await createTodo(todo);
    setTodos([...todos, data]);
  };

  const toggleTodo = async (todo) => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    await updateTodo(todo._id, updatedTodo);
    setTodos(todos.map((t) => (t._id === todo._id ? updatedTodo : t)));
  };

  const deleteTodoById = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter((t) => t._id !== id));
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodoById} />
    </div>
  );
};

export default App;
