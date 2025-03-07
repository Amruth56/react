import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {removeTodo} from '../app/features/todo/todoSlice' 

function Todos() {
   const todos = useSelector(state => state.todos)
   const dispatch = useDispatch()
  return (
    <div>
      <div>Todos</div>
      {todos.map(
          (todo) => {
              return (
              <div key={todo.id} className="flex items-center justify-between bg-gray-800 text-gray-100 p-4 my-2 rounded">
                  <p>{todo.text}</p>
                  <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
              </div>
              )
          }
      )}
    </div>
  )
}

export default Todos