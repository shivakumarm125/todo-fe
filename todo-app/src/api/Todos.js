import axios from 'axios';

const API = 'https://todo-be-62x0.onrender.com/api/todos';

export const getTodos = () => axios.get(API);
export const createTodo = (data) => axios.post(API, data);
export const updateTodo = (id, data) => axios.put(`${API}/${id}`, data);
export const deleteTodo = (id) => axios.delete(`${API}/${id}`);
