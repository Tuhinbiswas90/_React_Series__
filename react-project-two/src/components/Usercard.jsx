import React from 'react'
import tuhinpic from '../assets/tuhinpic.jpg'
import "./Usercard.css"
const Usercard = (props) => {
  return (
    <div className='users-container'>
      <p id='user-name'>{props.name}</p>
      <img id='user-img' src={tuhinpic} alt='Tuhin'></img>
      <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default Usercard
