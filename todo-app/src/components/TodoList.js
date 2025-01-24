import React from 'react';

const TodoList = ({ todos, onToggle, onDelete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo._id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo)}
          />
          {todo.title}
          <button onClick={() => onDelete(todo._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
