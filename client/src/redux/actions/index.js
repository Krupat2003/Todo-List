import axios from 'axios';

import { ADDNEW_TODO, GETALL_TODO, TOGGEL_TODO, UPDATE_TPDO, DELETE_TODO, TOGGEL_TAB} from './type';

const API_URL = 'http://localhost:8000';

export const addNewTodo = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`${API_URL}/todos`, { data });

        dispatch({ type: ADDNEW_TODO, payload: res.data })
    } catch (error) {
        console.log('Error while calling addNewTodo API', error.message)
    }
}

export const getAllTodos = () => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos`);

        dispatch({ type: GETALL_TODO, payload: res.data })
    } catch (error) {
        console.log('Error while calling getAllTodos API', error.message)
    }
}

export const toggleTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos/${id}`);

        dispatch({ type: TOGGEL_TODO, payload: res.data })
    } catch (error) {
        console.log('Error while calling getAllTodos API', error.message)
    }
}

export const updateTodo = (id,data) => async (dispatch) => {
    try {
        const res = await axios.put(`${API_URL}/todos/${id}`, {data});

        dispatch({ type: UPDATE_TPDO, payload: res.data })
    } catch (error) {
        console.log('Error while calling updateTodo API', error.message)
    }
}

export const deleteTodo = (id,data) => async (dispatch) => {
    try {
        const res = await axios.delete(`${API_URL}/todos/${id}`);

        dispatch({ type: DELETE_TODO, payload: res.data })
    } catch (error) {
        console.log('Error while calling deleteTodo API', error.message)
    }
}

export const toggelTab = (tab) => async(dispatch) => {
    dispatch({type: TOGGEL_TAB, selected: tab})
}

