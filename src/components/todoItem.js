import React, { Component } from 'react';

import {deleteTodo} from '../actions/todos'
import {completeTodo} from '../actions/todos'

class TodoItem extends Component {
  handleDelete = (e) => {
    deleteTodo(this.props.id)
  }

  handleComplete = (e) => {
    completeTodo(this.props.id)
  }

  render() {
    return (
        <li className={this.props.status}>
          {this.props.text}
          <button className = "delete" onClick={this.handleDelete}>Delete</button>
          <button className = "complete" onClick={this.handleComplete}>Mark as Complete</button>

        </li>
    )
  }
}

export default TodoItem
