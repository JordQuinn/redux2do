import React, { Component } from 'react'
import TodoForm from './TodoForm'
import '../styles/App.css'
import {Provider} from 'react-redux'
import TodoList from './TodoList'
import store from '../store'

class App extends Component {
  render() {
    return (
      <Provider store ={store}>
      <div>
        <TodoForm />
        <TodoList />
      </div>
    </Provider>

    )
  }
}

export default App;
