import { useEffect, useState  , useRef} from "react";
import "./App.css";

function App() {
  const[time,setTime]=useState(0);
  let timeRef=useRef(null);

  function startTimer(){
    timeRef.current = setInterval(()=>{
      setTime(time => time+1)
    }, 1000);
  }

  function stopTimer(){
    clearInterval(timeRef.current);
    timeRef.current = null;
  }

  function resetTimer(){
    stopTimer();
    setTime(0);
  }














  // const [count, setCount] = useState(0);
  // let val= useRef(0);

  // let btnRef= useRef();

  // function handleIncreament(){   
  //   val.current=val.current +1;
  //   console.log("Value of val: ",val);
  //   setCount(count + 1);
  // }

  // function changeColor(){
  //   btnRef.current.style.background="red";
  // }

  //it runs on every render
  // useEffect(()=>{
  //   console.log("useEffect is running");
  // })

  return (
    <div>
      <h1 >StopWatch: {time} seconds</h1>
      <button onClick={startTimer}>
        Start
      </button>
      <br/> <br/>

      <button onClick={stopTimer}>
        Stop
      </button>
      <br/> <br/>

      <button onClick={resetTimer}>
        Reset
      </button>














      {/* <button 
      ref={btnRef}
      onClick={handleIncreament}>Increament</button>
      <br/>
      <br/>

      <button onClick={changeColor}>
        Change Color of 1st button
      </button>
      <br/>

      <div>Count :{count}</div> */}
    </div>
  );
}

export default App;
