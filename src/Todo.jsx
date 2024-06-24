import { useState } from 'react';

export const Todo = () => {
    
    const [todo,setTodo] = useState([]);

    const [currentTodo,setCurrentTodo]=useState({
        name:'',
        editing_name:'',
        state:'display'
    });
    
    return(
        <>
            <h2>
                Simple Todo App
            </h2>

            <label 
            for='prakash'
            >
                Enter Todo Bitch:
            </label>

            <input className='prakash' type="text" value={currentTodo.name} onChange={(e)=>{
                setCurrentTodo({
                    
                    ...currentTodo,
                    name : e.target.value,
                    editing_name: e.target.value,
                    state:'display'
                })
            }}/>
            
            <button onClick={()=>setTodo([...todo, currentTodo])}>Add</button>

            <div>
                {todo.map((todo)=>{
                    let display_component = <></>
                    if(todo.state == 'edit'){
                        display_component=<input type="text" defaultValue={todo.name} onChange={(e)=>{
                            let new_todo = Array.from(todo)
                            new_todo= new_todo.toSpliced(new_todo.indexOf(todo),1,{
                                name:todo.name,
                                editing_name:e.target.value,
                                state:todo.state
                            });
                            setTodo(new_todo);
                        }
                        }/>
                }
                else{
                    display_component=<p>{todo.name}</p>
                }
                console.log(display_component)
                return(
                    <>
                    {display_component}
                    {/* {alert({display_component})} */}

                    <button onClick={()=>{
                    

                    if(todo?.state == 'edit'){
                        let new_todo= Array.from(todo)
                        new_todo = new_todo.toSpliced(new_todo.indexOf(todo),1,{
                            name:todo?.editing_name,
                            editing_name:todo?.editing_name,
                            state:'display'
                        });
                        setTodo(new_todo);
                    }else{
                        console.log(todo);
                        let new_todo= Array.from(todo)
                        new_todo=new_todo.toSpliced(new_todo.indexOf(todo),1,{
                            name:todo.name,
                            editing_name:todo.name,
                            state:'edit'
                        });
                        setTodo(new_todo)
                    }
                    }
                    }>
                        {todo.state == 'edit' ? "Save" : "Edit"}
                    </button>
                    </>
                )

                })}
            </div>




        </>
)
}