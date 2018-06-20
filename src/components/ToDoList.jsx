import React from 'react';
import ToDoItem from './ToDoItem';
import { connect } from 'react-redux';
import { addTodo } from '../actions'

// class ToDoList extends React.Component {
// 	// breaks in the ToDoItem tag
// 	// when using i as a parameter i will pull the index number of each item in the array (or really i can be anything as long as it is the second argument)
// 	render() {
// 		return (
// 			<section className="main">
// 				<ul className="todo-list">
// 					{this.props.todos.map((todo, i) => <ToDoItem key={todo.id} id={todo.id} isCompleted={todo.completed} text={todo.title} destroyOne={this.props.destroyOne(i)} toggleTodo={this.props.toggleTodo(i)} />)}
// 				</ul>
// 			</section>
// 		)
// 	}
// }

// export default ToDoList;

class ToDoList extends React.Component {
	state = {
		text: ''
	}

	handleChange = (e) => {
		this.setState({ text: e.target.value })
	}

	handleEnter = (e) => {
		if (e.key === 'Enter') {
			this.props.dispatch(addTodo(this.state.text))
			this.setState({ text: '' });
		}
	}

	render() {
		const { text } = this.state;
		return (
			<React.Fragment>
				<input value={text} onKeyUp={this.handleEnter} onChange={this.handleChange} placeholder='wdywanna say a'/>
				<ul>
					<li>1</li>
					<li>2</li>
					<li>3</li>
				</ul>
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => ({
	todos: state.todos
})

export default connect(mapStateToProps)(ToDoList);