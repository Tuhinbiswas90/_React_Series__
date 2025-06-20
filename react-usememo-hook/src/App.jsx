
import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count,setCount]= useState(0);
  const [input,setInput]=useState(0);
  function hadleIncreament(){
    setCount(count + 1);
  }

  function expensiveTask(num){
    console.log("inside expensive task");
    for(let i=0;i<1000000000;i++){

    }

    return num*2;
  }

  let doubleValue=useMemo(()=> expensiveTask(input),[input]);
  
  return (
    <div>
      <button onClick={hadleIncreament}>
        Increament
      </button>

      <div>
        Count : {count}
      </div>

      <input  
      type='number'
      placeholder='Enter Number'
      value={input}
      onChange={(e) => setInput(e.target.value)}
      />

      <div>
        Double :{doubleValue}
      </div>
    </div>
  )
}

export default App
