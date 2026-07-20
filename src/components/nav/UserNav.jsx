import React,{useEffect, useState} from 'react'
import './Nav.css'
// import Home from '../home/Home'
import {Link, useNavigate} from 'react-router-dom'
import UserHome from '../home/UserHome'
import { toast } from 'react-toastify'

function UserNav() {
    const [name,setName] = useState("")
    const navigate = useNavigate()
    useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setName(storedName);
    //   setIsLoggedIn(true);
    }
  }, []);
    // const emailName = email.split('@')[0];

  return (
    <div>
    <div className='nav'>
      <div className='nav-left'>
        <h3>Mindease</h3>
      </div>
    <div className='nav-right'>
        <Link to={"/"} className='home'><p >Home</p></Link>
        <Link to={"/user-about"} className='about'><p >About</p></Link>
        <Link to={"/user-mood-tracker"} className='mood-tracker'><p >Mood Tracker</p></Link>
        <p>{name}</p>
        <p
    onClick={() => {

      localStorage.removeItem("userName");
      localStorage.removeItem("userEmail");
      navigate("/")
      window.location.reload();
      toast.success("Successfully Logged Out")

    }}
  >
    Logout
  </p>
    </div>
    </div><br/><br/>
    {/* <Home/> */}
    <UserHome/>
    {/* <SignIn
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
          /> */}
    </div>
  )
}

export default UserNav