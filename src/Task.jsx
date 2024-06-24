/* This component will create the todo entries and mantain it's own todo state
 * as well as generate functionality for editing the corresponding todo.
 */
import React, { useState } from 'react';

export const Todo = () => {
    
  const [todos, setTodos] = useState([]);
    
  const [currentTodo, setCurrentTodo] = useState({
    name: '',
    editing_name: '',
    state: 'display'
  });

  return (
  <React.Fragment>
          
    <input type="text" value={currentTodo.name} onChange={(e) => {
      setCurrentTodo({
        ...currentTodo,
        name: e.target.value,
        editing_name: e.target.value,
        state: 'display'
      })
    }}/>
    
    <button onClick={() => setTodos([...todos, currentTodo])}>Add</button>

    <div>
      {todos.map((todo) => {

      let display_component = <React.Fragment></React.Fragment>

      if(todo.state == 'edit') {
          display_component = <input type="text" defaultValue={todo.name} onChange={(e) => {
              let new_todos = Array.from(todos)
              new_todos = new_todos.toSpliced(new_todos.indexOf(todo), 1, {
              name: todo.name,
              editing_name: e.target.value,
              state: todo.state
              });
            setTodos(new_todos);
            }
          }/>
      }
      else {
        display_component = <p>{todo.name}</p>
      }
     console.log(display_component)

      return (
        <React.Fragment>
        {display_component}
              
        <button onClick={() => {
            
           
          if(todo?.state == 'edit') {
              let new_todos = Array.from(todos)
              new_todos = new_todos.toSpliced(new_todos.indexOf(todo), 1, {
              name: todo?.editing_name,
              editing_name: todo?.editing_name,
              state: 'display'
              });
            setTodos(new_todos);
          } else {
              console.log(todos)
              let new_todos = Array.from(todos)
              new_todos = new_todos.toSpliced(new_todos.indexOf(todo), 1, {
              name: todo.name,
              editing_name: todo.name,
              state: 'edit'
              });
            setTodos(new_todos);
                
          }
        
        }
        }> {todo.state == 'edit' ? "Save" : "Edit"}
        </button>
              
        </React.Fragment>
      )
          
      })
    }
  </div>
  </React.Fragment>
  );
}

