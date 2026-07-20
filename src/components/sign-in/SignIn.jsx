import React, { useState } from 'react'
import "./Signin.css"
import '../nav/Nav.css'
import validator from 'validator'
import { toast } from 'react-toastify'
import Login from '../login/Login'
import axios from "axios";

function SignIn({
  signupcloseModal,
  isSignUpOpen,
  isLoginOpenModal,
  setIsLoginOpenModal
}) {

  if (!isSignUpOpen) {
    return null;
  }

  const [name, setFullName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmpassword] = useState("")

  const handlesubmit = async (e) => {

    e.preventDefault();

    if (
      email === "" ||
      password === "" ||
      confirm_password === "" ||
      name === ""
    ) {

      toast.error("Please fill the form");
    }

    else if (!validator.isEmail(email)) {

      toast.error("Invalid Email ID");
    }

    else if (!validator.isStrongPassword(password)) {

      toast.error("Please give a strong password");
    }

    else if (password.length < 8) {

      toast.error("Password length should be at least 8 characters");
    }

    else if (password !== confirm_password) {

      toast.error("Passwords don't match");
    }

    else {

      try {

        const res = await axios.post(
          "http://localhost:3000/mindease/sign-in",
          {
            name: name.trim(),
            email: email.trim(),
            password: password.trim(),
            confirm_password: confirm_password.trim()
          }
        );

        console.log(res.data);

        toast.success("Signup Successful");

        setFullName("");
        setEmail("");
        setPassword("");
        setConfirmpassword("");

        // open login modal first
        setIsLoginOpenModal(true);

        // close signup modal after small delay
        setTimeout(() => {
          signupcloseModal();
        }, 0);

      }

      catch (error) {

        console.log(error);
        toast.error("Signup Failed");
      }
    }
  }

  return (

    <div>

      {
        isSignUpOpen &&

        <div className='modal-overlay'>

          <div className='modal-content'>

            <button
              className='close-btn'
              onClick={signupcloseModal}
            >
              X
            </button>

            <h2>Sign In</h2>

            <div className='Form'>

              <input
                type='text'
                value={name}
                placeholder='Enter your Full Name'
                onChange={(e) => {
                  setFullName(e.target.value)
                }}
              />

              <input
                type='email'
                value={email}
                placeholder='Enter your Email'
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />

              <input
                type='password'
                value={password}
                placeholder='Enter your Password'
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />

              <input
                type='password'
                value={confirm_password}
                placeholder='Re-enter your Password'
                onChange={(e) => {
                  setConfirmpassword(e.target.value)
                }}
              />

              <button
                type='submit'
                className='sign-in'
                onClick={handlesubmit}
              >
                Sign in
              </button>

            </div>

            <h4>Already Have an Account</h4>

            <p
              className='Login'
              onClick={() => {

                setIsLoginOpenModal(true);

                setTimeout(() => {
                  signupcloseModal();
                }, 0);

              }}
            >
              Login
            </p>

          </div>

        </div>
      }

      <Login
        isloginOpen={isLoginOpenModal}
        logincloseModal={() => setIsLoginOpenModal(false)}
      />

    </div>
  )
}

export default SignIn