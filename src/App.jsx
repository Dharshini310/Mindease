import React from 'react'
import Nav from './components/nav/Nav'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import About from './components/about/About'
import MoodTracker from './components/mood-tracker/MoodTracker'
import SignIn from './components/sign-in/SignIn'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/mood-tracker" element={<MoodTracker/>}/>
          <Route path="/sign-in" element = {<SignIn/>}/>
        </Routes>
        </BrowserRouter>
        <ToastContainer position='bottom-right'/>
    </div>
  )
}

export default App