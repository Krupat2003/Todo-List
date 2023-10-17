import express from 'express';

import { addTodo, getAllTodos, toggelTodoDone, updateTodo, deleteTodo } from '../controller/todo-controller.js';
// import { deleteTodo } from '../../client/src/redux/actions/index.js';
// import { updateTodo } from '../../client/src/redux/actions/index.js';
// import { getAllTodos } from '../../client/src/redux/actions/index.js';

const route = express.Router();

route.post('/todos', addTodo);
route.get('/todos', getAllTodos);
route.get('/todos/:id', toggelTodoDone)
route.put('/todos/:id', updateTodo)
route.delete('/todos/:id', deleteTodo)

export default route;