import React, { useState } from 'react'
import "./Signin.css"
import '../nav/Nav.css'
import {Link} from 'react-router-dom'
import validator from 'validator'
import { toast } from 'react-toastify'

function SignIn() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmpassword,setConfirmpassword] = useState("")
  const handlesubmit = () => {

  if (email === "" || password === "" || confirmpassword === "") {
    toast.error("Please fill the form");
  }
  else if (!validator.isEmail(email)) {
    toast.error("Invalid Email ID")
    setEmail("")
    setPassword("")
    setConfirmpassword("")
  }
  else if(!validator.isStrongPassword(password)){
    toast.error("Please give a strong password")
    setEmail("")
    setPassword("")
    setConfirmpassword("")
  }
  else if (password.length < 8) {
    toast.error("Password length should be at least 8 characters");
    setEmail("")
    setPassword("")
    setConfirmpassword("")
  }
  else if (password !== confirmpassword) {
    toast.error("Passwords don't match");
    setEmail("")
    setPassword("")
    setConfirmpassword("")
  }
  else {
    toast.success("Successfully Logged in");
    console.log(email, password);

    setEmail("");
    setPassword("");
    setConfirmpassword("");
  }
}
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
            <div className='Form'>
                <input type='text' value={email} placeholder='Enter your email' onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type='password'value={password} placeholder='Enter your password' onChange={(e)=>{setPassword(e.target.value)}}/>
                <input type='password'value={confirmpassword} placeholder='Re-enter your password' onChange={(e)=>{setConfirmpassword(e.target.value)}}/>
                <button type='submit' className='sign-in' onClick={handlesubmit}>Sign in</button>
            </div>
        </div>
  )
}

export default SignIn