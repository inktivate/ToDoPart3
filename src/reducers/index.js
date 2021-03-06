// import { ADD_TODO } from '../actions';
const ADD_TODO = 'ADD_TODO';

const initialState = {
    todos: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload
                ]
            }

        default:
            return state;
    }
};