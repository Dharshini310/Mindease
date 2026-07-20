import React, { useState } from 'react'
import './Login.css'
import validator from 'validator'
import { toast } from 'react-toastify'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login({logincloseModal,isloginOpen}) {
  if(!isloginOpen){
    return null;
  }
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()
  
  const handlesubmit = async (e) => {
      e.preventDefault();
  
    if (email === "" || password === "" ) {
      toast.error("Please fill the form");
    }
    else if (!validator.isEmail(email)) {
      toast.error("Invalid Email ID")
      setEmail("")
      setPassword("")
    }
    else if(!validator.isStrongPassword(password)){
      toast.error("Please give a strong password")
      setEmail("")
      setPassword("")
    }
    else if (password.length < 8) {
      toast.error("Password length should be at least 8 characters");
      setEmail("")
      setPassword("")
    }
    else {
      try{
        const res = await axios.post("http://localhost:3000/mindease/login",{
            email : email.trim(),
            password : password.trim()
        });
        console.log(res)
        localStorage.setItem("userEmail",res.data.user.email)
        localStorage.setItem("userName",res.data.user.name)
        console.log("Stored:",localStorage.getItem("userName"))
        toast.success("Successfully Logged in");
        navigate("/user-nav")
        setEmail("");
        setPassword("");
        logincloseModal();
      }catch (error) {
            console.log(error);
            toast.error("Login Failed");
          }
      // console.log(email, password);
  
      // setEmail("");
      // setPassword("");
    }
  }
  return (
    <div>
        <div className='modal-overlay'>
      <div className='modal-content'>
        <button className='close-btn' onClick={logincloseModal}>X</button>
        <h2>LogIn</h2>
         <div className='Form'>
                <input type='email' value={email} placeholder='Enter your email' onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type='password'value={password} placeholder='Enter your password' onChange={(e)=>{setPassword(e.target.value)}}/>
                <button type='submit' className='login' onClick={handlesubmit}>Login</button>
            </div>
      </div>
    </div>
    </div>
  )
}

export default Login