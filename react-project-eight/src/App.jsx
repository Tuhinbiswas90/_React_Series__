
import './App.css'
import { use, useEffect, useState } from 'react';
import LoggerComponent from './components/LoggerComponent';


function App() {
  // const[count,setCount]= useState(0);
  // const[total,setTotal]=useState(1);
  //first-- side-effect function
  //second--  clean-up function
  //third-- comma separated dep list


  //variation: 1
  //runs on every render
  // useEffect(() => {
  //   alert("i will run on each render");
  // })
  

  //variation:2
  //that runs on only first render
  // useEffect(() => {
  //   alert("i will run only first render")
  // }, [])
  

  //variation:3
  // useEffect(() => {
  //   alert("i will run every time when count is updated");
  // }, [count])

  //variation:4
  //multiple dependencies
  // useEffect(() => {
  //   alert("i will run every time when count/total is updated")
  // }, [count,total])

  //variation: 5
  //now let's add a clean-up function
  // useEffect(() => {
  //   alert("Count is updated")
  
  //   return () => {
  //     alert("Count is unmounted form UI")
  //   }
  // }, [count])
  
  
  
  // function handleClick(){
  //   setCount(count+1);
  // }

  // function handleClickTotal(){
  //   setTotal(total+1);
  // }

  return (
    <div>
      <LoggerComponent/>


      {/* <button onClick={handleClick}>
        Update Count
      </button>
      <br/>
      Count is: {count}
      <br/>


      <button onClick={handleClickTotal}>
        Update Total
      </button>
      <br/>
      Total is: {total} */}
    </div>
  )
}

export default App
