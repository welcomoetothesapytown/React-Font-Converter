import  Task  from './Task.jsx'
let nextId=0;

function App() {
  return(
  <Task nextId={nextId}/>
  )
}

export default App
