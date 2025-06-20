import React from 'react'

// const Card = (props) => {
//   return (
//     <div>
//       {props.children}
//     </div>
//   )
// }
      //or 
const Card = ({children}) => {
    return (
      <div>
        {children}
      </div>
    )
  }
  

export default Card
