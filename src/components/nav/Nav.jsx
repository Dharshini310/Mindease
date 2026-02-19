import React from 'react'
import './Nav.css'
import Home from '../home/Home'

function Nav() {
  return (
    <div>
    <div className='nav'>
      <div className='nav-left'>
        <h3>Mindease</h3>
      </div>
    <div className='nav-right'>
        <p>Home</p>
        <p>About</p>
        <p>Mood Tracker</p>
        <p>Sign in </p>
    </div>
    </div><br/><br/>
    <Home/>
    </div>
  )
}

export default Nav