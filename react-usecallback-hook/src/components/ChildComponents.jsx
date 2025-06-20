import React from 'react'


// React.memo-> wrap -> component -> component re-render tabhi hoga jab props change honge nahi toh re-render nahi hoga


// if you are sending a function , then react.memo wont be able to save you form re-rendering


const ChildComponents = React.memo(
    (props) => {
    console.log("Child component got re-render again");
  return (
    <div>
      <button onClick={props.handleClick}>
        {props.buttonName}
      </button>
    </div>
  )
})

export default ChildComponents
