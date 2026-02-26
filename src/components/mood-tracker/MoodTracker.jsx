import React from 'react'
import '../nav/Nav.css'
import {Link} from 'react-router-dom'

function MoodTracker() {
  return (
    <div>
        <div className='nav'>
      <div className='nav-left'>
        <h3>Mindease</h3>
      </div>
    <div className='nav-right'>
        <Link to={"/"} ><p >Home</p></Link>
        <Link to={"/about"}><p >About</p></Link>
        <Link to={"/mood-tracker"}><p >Mood Tracker</p></Link>
        <Link to={"/sign-in"}><p >Sign in </p></Link>
    </div>
    </div><br/><br/>
        <div>
            Mood Tracker
        </div>
    </div>
  )
}

export default MoodTracker