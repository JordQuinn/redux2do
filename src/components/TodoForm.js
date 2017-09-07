import React, { Component } from 'react';
import {addTodo} from '../actions/todos'

class TodoForm extends Component {
  state ={
    value: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    addTodo(this.state.value)
    this.setState({
      value: ''
    })
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit= {this.handleSubmit}>
            <input onChange ={this.handleChange} type="text" value ={this.state.value} placeholder = "Enter a todo" name = "value" />
        <button type ="Submit">Save Todo</button>
        </form>

      </div>
    );
  }
}

export default TodoForm;
