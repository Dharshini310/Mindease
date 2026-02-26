import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='main'>
        <div>
            <h1>Your Mind <br/><br/> Deserves <br/><br/> Peace</h1>
            <p>Breathe - Relax . Reconnect with yourself guided meditation</p><br/>
            <Link to="/sign-in">
                <button className='get-started'>Get Started For Free</button>
            </Link>
        </div>
        <div>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTklw7oEfeJFC4-6tzS0MjU-2gTLVcuRkKfAg&s" 
              alt="Meditation" 
            />
        </div>
    </div>
  )
}

export default Home
