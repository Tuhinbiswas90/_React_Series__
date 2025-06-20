import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navagate=useNavigate();
    function handleClick(){
        navagate("/dashboard");
    }
  return (
    <div>
      About Page
      <button onClick={handleClick}>
        Move to Dashboard Page
      </button>
    </div>
  )
}

export default About
