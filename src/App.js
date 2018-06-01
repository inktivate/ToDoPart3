import React from 'react';
import './index.css';
import todos from './todos.json';

const ToDoItem = (props) => {
	let complete = () => {
		if (props.isCompleted) {
			return "completed"
		} else {
			return null
		}
	}
	let checked = () => {
		if (props.isCompleted) {
			return true
		} else {
			return null
		}
	}

    return(
        <li class={complete()} >
			<div class="view">
				<input class="toggle" type="checkbox" defaultChecked={checked()}/>
				<label>{props.text}</label>
				<button class="destroy"></button>
			</div>
		</li>
    );
}

class ToDoList extends React.Component {
	state = {
		todos: todos.slice()
  }
	
	render() {
		return (
			<section class="main">
				<ul class="todo-list">
					{this.state.todos.map( todo => <ToDoItem key={todo.id} isCompleted={todo.completed} text={todo.title}/> )}
				</ul>
			</section>

	)}
}


class App extends React.Component{
	render() {
		return (
			<section class="todoapp">
				<header class="header">
					<h1>todos</h1>
					<input class="new-todo" placeholder="What needs to be done?" autofocus/>
				</header>
				<ToDoList />
				<footer class="footer">
					<span class="todo-count"><strong>0</strong> item(s) left</span>
					<button class="clear-completed">Clear completed</button>
				</footer>
			</section>
		)
	}
 }
export default App;



