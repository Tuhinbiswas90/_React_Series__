import './App.css'
import { useState } from 'react';
import LogoutBtn from './components/LogoutBtn';
import LoginBtn from './components/LoginBtn';

function App() {
  const[isLoggedIn,setLoggedIn]=useState(false);

  //using early return
  if(!isLoggedIn){
    return (
      <LoginBtn/>
    )
  }






   //using logical operator
  // return(
  //   <div>
  //     <h1>Welcome To the react world...</h1>
  //     <div>
  //       {isLoggedIn && <LogoutBtn/>}
  //     </div>
  //   </div>
  // )


          //usnig ternary operator
  // return (
  //   <div>
  //     {isLoggedIn?<LogoutBtn/>:<LoginBtn/>}
  //   </div>
  // )
  
        //using if-else condition
  // if(isLoggedIn) {
  //   return (
  //     <LogoutBtn/>
  //   )
  // }
  // else{
  //   return(
  //     <LoginBtn/>
  //   )
  // }



}

export default App
