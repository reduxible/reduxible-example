import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { action } from '../../../actions/todo';

@connect(
  state => ({
    todos: state.todo.todos
  }),
  {
    addTodo: action('ADD_TODO'),
    removeTodo: action('REMOVE_TODO')
  }
)
export default class Todo extends Component {
  static propTypes = {
    todos: PropTypes.array,
    addTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired
  };

  state = {
    todo: ''
  };

  addTodo() {
    const { addTodo } = this.props;
    addTodo(this.state.todo);
    this.setState({todo: ''});
  };

  handleChange(e) {
    this.setState({todo: e.target.value});
  };

  render() {
    const { todos } = this.props;
    const { todo } = this.state;
    return (
      <div className="pure-form">
        <input type="text" className="pure-input-rounded" placeholder="Add Todo Here" value={todo} onChange={::this.handleChange} />
        <button className="pure-button-primary" onClick={::this.addTodo}>Add Todo</button>
        <ul>
          {todos.map((each) => { return <li>{each}</li> })}
        </ul>
      </div>);
  }
}
