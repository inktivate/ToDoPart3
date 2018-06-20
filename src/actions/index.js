import reducer from './reducers';

// action type

export const ADD_TODO = 'ADD_TODO';

// action creator

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: text
})