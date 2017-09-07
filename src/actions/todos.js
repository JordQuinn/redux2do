import store from '../store'
import shortid from 'shortid'



export function addTodo(text) {
  store.dispatch({
    type: 'ADD_TODO',
    todo:{
      text: text,
      id: shortid.generate(),
      status: 'pending'
    }
  })
}

export function deleteTodo(id){
  store.dispatch({
    type: 'DELETE_TODO',
    id: id
  })
}

export function completeTodo(id){
  store.dispatch({
    type: 'COMPLETE_TODO',
    id: id
  })
}
