import React from 'react'
import { Link } from 'react-router-dom'
import '../nav/Nav.css'
import './About.css'

function About() {
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
      </div><br /><br />
      <div className='About-main'>
        <div className='about-mindease'> 
          <h1>About Mindease</h1>
          <section>MindEase is a calming space designed to help you slow down, breathe deeply, and reconnect with yourself. In today’s fast-moving world, your mind deserves peace, balance, and care.<br /><br />

            We believe mental wellness should be simple and accessible for everyone. Whether you're feeling overwhelmed, struggling to sleep, or just need a moment of calm — MindEase is here for you.</section>
        </div>
        <div className='our-mission'>
          <h1>Our Mission</h1>
          <section>Our mission is to make mental wellness a daily habit, not a luxury. We aim to support your emotional well-being through guided practices that bring clarity, relaxation, and focus.</section>
        </div>
        <div className='what'>
          <h1>What We Offer</h1>
          <div>
            <h3>Guided Meditations</h3>
            <section>Step-by-step meditation sessions designed to reduce stress and improve focus.</section>
          </div>
          <div>
            <h3>Sleep Sounds</h3>
            <section>Soothing sounds to help you relax and improve your sleep quality.</section>
          </div>
          <div>
            <h3>Mood Tracker</h3>
            <section>Track how you feel daily and understand your emotional patterns.</section>
          </div>
          <div>
            <h3>Daily Reminders</h3>
            <section>Gentle notifications to remind you to take mindful breaks.</section>
          </div>
        </div>
        <div className='why'>
          <h1>Why Mindease?</h1>
          <section>Because your mind deserves peace.<br />
            Because small moments of calm can change your entire day.<br />
            Because self-care should feel simple, not complicated.</section>
        </div>
      </div>
    </div>
  )
}

export default About