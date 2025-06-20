import { createContext } from 'react';
import './App.css'
import ChildA from './components/ChildA';
import { useState } from 'react';
import { use } from 'react';  
import ChildC from './components/ChildC';

//step: 1 create context
// const UserContext = createContext();
//step:2 wrap all the child inside a provider
//step:3 Pass value
//step: 4 consumer k andar jaake consume karlo

const ThemeContext= createContext();

function App() {
  // const[user,setUser]= useState({name:"Tuhin"});
  const [theme,setTheme]=useState('light');

  return (
    
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div id='container' style={{backgroundColor:theme==='light'?"beige":"black"}}>
          <ChildA/>
      </div>
      
    </ThemeContext.Provider>


    // <div>
      /* <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider> */
      
    // </div>
  )
}

export default App
// export {UserContext}
export {ThemeContext}