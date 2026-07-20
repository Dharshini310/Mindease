import React, { useEffect, useState } from 'react'
import './Nav.css'
import Home from '../home/Home'
import { Link } from 'react-router-dom'
import SignIn from '../sign-in/SignIn'
import Login from '../login/Login'
import UserNav from './UserNav'

function Nav() {

  const [isSignUpModal, setIsSignUpModal] = useState(false);
  const [isLoginOpenModal, setIsLoginOpenModal] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {

    const storedUser = localStorage.getItem("userName");

    if (storedUser) {
      setIsLoggedIn(true);
    }

  }, []);

  // if user logged in show UserNav
  if (isLoggedIn) {
    return <UserNav />
  }

  return (

    <div>

      <div className='nav'>

        <div className='nav-left'>
          <h3>Mindease</h3>
        </div>

        <div className='nav-right'>

          <Link to={"/"} className='home'>
            <p>Home</p>
          </Link>

          <Link to={"/about"} className='about'>
            <p>About</p>
          </Link>

          <Link to={"/mood-tracker"} className='mood-tracker'>
            <p>Mood Tracker</p>
          </Link>

          <p onClick={() => {
            setIsSignUpModal(true)
          }}>
            Sign in
          </p>

        </div>

      </div>

      <br />
      <br />

      <Home />

      <SignIn
        signupcloseModal={() => {
          setIsSignUpModal(false)
        }}
        isSignUpOpen={isSignUpModal}
        isLoginOpenModal={isLoginOpenModal}
        setIsLoginOpenModal={setIsLoginOpenModal}
      />

      <Login
        logincloseModal={() => {
          setIsLoginOpenModal(false)

          // instantly update navbar
          setIsLoggedIn(true)
        }}
        isloginOpen={isLoginOpenModal}
      />

    </div>
  )
}

export default Nav