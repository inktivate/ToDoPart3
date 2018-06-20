const ADD_TODO = 'ADD_TODO'
const poop = {
    type: ADD_TODO,
    text: 'Build my first Redux app'
}

// stuff

let nextTodoId = 0
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

// import * as actions from './index'

// describe('todo actions', () => {
//   it('addTodo should create ADD_TODO action', () => {
//     expect(actions.addTodo('Use Redux')).toEqual({
//       type: 'ADD_TODO',
//       id: 0,
//       text: 'Use Redux'
//     })
//   })

//   it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
//     expect(actions.setVisibilityFilter('active')).toEqual({
//       type: 'SET_VISIBILITY_FILTER',
//       filter: 'active'
//     })
//   })

//   it('toggleTodo should create TOGGLE_TODO action', () => {
//     expect(actions.toggleTodo(1)).toEqual({
//       type: 'TOGGLE_TODO',
//       id: 1
//     })
//   })
// })
