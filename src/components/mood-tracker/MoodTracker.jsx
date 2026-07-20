import React, { useState } from 'react'
import '../nav/Nav.css'
import { Link } from 'react-router-dom'
import './MoodTracker.css'
import SignIn from '../sign-in/SignIn'
import Login from '../login/Login'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFaceSurprise } from '@fortawesome/free-solid-svg-icons'

function MoodTracker() {
  const [isSignUpModal,setIsSignUpModal] = useState(false);
    const [isLoginOpenModal,setIsLoginOpenModal] = useState(false)
  return (
    <div>
      <div className='nav'>
        <div className='nav-left'>
          <h3>Mindease</h3>
        </div>
        <div className='nav-right'>
          <Link to={"/"}><p>Home</p></Link>
          <Link to={"/about"}><p>About</p></Link>
          <Link to={"/mood-tracker"}><p>Mood Tracker</p></Link>
          <p onClick={() => {setIsSignUpModal(true)}}>Sign in </p>
        </div>
      </div>

      <br /><br />

      <div className='parent'>
        <div className='card-main'>
          <div className='happy' onClick={() => {setIsSignUpModal(true)}}>
            <span className="material-symbols-outlined">
              sentiment_excited
            </span>
            <h3>Happy</h3>
          </div>
          

          <div className='sad' onClick={() => {setIsSignUpModal(true)}}>
            <span className="material-symbols-outlined">
              sentiment_dissatisfied
            </span>
            <h3>Sad</h3>
          </div>
          

          <div className='angry' onClick={() => {setIsSignUpModal(true)}}>
            <span className="material-symbols-outlined">
              sentiment_extremely_dissatisfied
            </span>
            <h3>Angry</h3>
          </div>
          

          {/* <div>
            <FontAwesomeIcon icon={faFaceSurprise} />
            <h3>Surprise</h3>
          </div> */}
        </div>
      </div>
      <SignIn
        signupcloseModal={() => {
            setIsSignUpModal(false)
          }} 
          isSignUpOpen={isSignUpModal}
          isLoginOpenModal={isLoginOpenModal}
          setIsLoginOpenModal={setIsLoginOpenModal}
        />
          <Login
          logincloseModal={()=>{
            setIsLoginOpenModal(false)
          }}
          isloginOpen={isLoginOpenModal}
          />
    </div>
  )
}

export default MoodTracker