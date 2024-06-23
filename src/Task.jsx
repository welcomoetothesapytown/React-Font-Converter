import { useState } from "react";
export  default function Task({nextId}){
    const [task, setTask] = useState('')
    const [taskLists,setTaskLists]=useState([])
    const [date,setDate]=useState('')
    const [isEditing,setEditing]=useState(false)
    function Button(){
        const [isTrue,setTrue]=useState(false);
        return(
            <button 
              id="button"
              onClick={() => {
                setTrue(!isTrue);
            } }>
                    {(isTrue) ? "Save" : "Edit"}
            </button>
    )

    }
    return (
        <>
      
        <div>
          <h2>Simple Todos App</h2>
        </div>
    
    
        <label 
          for="inputArea">
          Enter todos &emsp;
        </label>
      
        <input
        placeholder="Add Task"
        value={task}
        onChange={e=>setTask(e.target.value)}>
        </input>
        &emsp;
        <input
        placeholder="Add date"
        type="date"
        value={date}
        onChange={e=>setDate(e.target.value)}>
        </input>
        &emsp;
        <button onClick={()=>{
        setTask('')
        setDate('')
          setTaskLists([
            ...taskLists,
            { id: nextId++, 
              name:task,
                date:date }
          ]);
          
        }}>Add</button>
    
    
        <ul>
            {taskLists.map(taskList => (
            <><li key={taskList.id}>
                    {taskList.name}
                    &emsp;
                    Finished By: {taskList.date}
                    &nbsp;
                    <Button key={taskList.id}></Button>
            </li>
            </>
            ))}
        </ul>
        
    
        </>
    )
}
    
