
import './App.css'
import Card from './components/Card'
import Button from './components/Button'
import { useState } from 'react'
function App() {
  const  [count, setCount]= useState(0);
  
  function handleClick(){
    setCount(count+1);
  }

  return (
    <div>
      <Button incrementCount={handleClick} text="click me">
        <h1>{count}</h1>
      </Button>

      {/* <Card name="tuhin biswas">
        <h1>Best web dev course</h1>
        <p>Trying to be consistent in this</p>
        <p>will complete this course soon</p>
      </Card>
      <Card>
        Hello Jee
      </Card> */}
    </div>
  )
}

export default App
