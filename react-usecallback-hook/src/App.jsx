
import { useCallback, useState } from 'react'
import './App.css'
import ChildComponents from './components/ChildComponents';
import ExpensiveComponents from './components/ExpensiveComponents';

function App() {
  // const [count,setCount]=useState(0);

  // function handleClick(){
  //   setCount(count+1);
  // }

  // const handleClick =useCallback(() => {
  //   setCount(count+1);
  // }, [count]);

  return (

    <div>
      <ExpensiveComponents />
    </div>



    // <div>
    //   <div>
    //     count: {count}
    //   </div>
    //   <br/>

    //   <button onClick={handleClick}>
    //     Increament
    //   </button>

    //   <br/> <br/>

    //   <button>
    //     <ChildComponents
    //      buttonName="Click Me"
    //      handleClick={handleClick}
         
    //     />
    //   </button>
    // </div>
  )
}

export default App
