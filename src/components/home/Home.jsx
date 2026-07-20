import React, { useState } from 'react'
import './Home.css'

import SignIn from '../sign-in/SignIn'
import Login from '../login/Login';

function Home() {
  const [isSignUpModal,setIsSignUpModal] = useState(false);
  const [isLoginOpenModal,setIsLoginOpenModal] = useState(false)
  return (
    <div className='main'>
        <div>
            <h1>Your Mind <br/><br/> Deserves <br/><br/> Peace</h1>
            <p>Breathe - Relax . Reconnect with yourself guided meditation</p><br/>
            
                <button className='get-started' onClick={() => {setIsSignUpModal(true)}}>Get Started For Free</button>
            
        </div>
        <div>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTklw7oEfeJFC4-6tzS0MjU-2gTLVcuRkKfAg&s" 
              alt="Meditation" 
            />
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

export default Home
