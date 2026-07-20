import React from 'react'
import Nav from './components/nav/Nav'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import About from './components/about/About'
import MoodTracker from './components/mood-tracker/MoodTracker'
// import SignIn from './components/sign-in/SignIn'
import { ToastContainer } from 'react-toastify';
import Sad from './components/moods/sad/Sad'
import Angry from './components/moods/angry/Angry'
import Happy from './components/moods/happy/Happy'
import UserNav from './components/nav/UserNav'
import UserAbout from './components/about/UserAbout'
import UserMoodTracker from './components/mood-tracker/UserMoodTracker'

function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav/>}/>
          <Route path="/user-nav" element={<UserNav/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/mood-tracker" element={<MoodTracker/>}/>
          {/* <Route path="/sign-in" element = {<SignIn/>}/> */}
          <Route path='/user-about' element={<UserAbout/>}/>
          <Route path="/user-mood-tracker" element={<UserMoodTracker/>}/>
          <Route path='/sad' element={<Sad/>}/>
          <Route path='/angry' element={<Angry/>}/>
          <Route path='/happy' element={<Happy/>}/>
        </Routes>
        </BrowserRouter>
        <ToastContainer position='bottom-right'/>
    </div>
  )
}

export default App