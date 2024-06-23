import { useState } from 'react'
function Panel(){
  return(
    <h1>Hello from the other world</h1>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Panel />
      
    </>
  )
}

export default App
