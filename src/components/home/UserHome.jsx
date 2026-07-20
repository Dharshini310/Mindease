import React, { useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import "./UserHome.css"
import yoga from "../../assets/3799847.jpg"

function UserHome() {
  const [name,setName] = useState("")
  const navigate = useNavigate()
   useEffect(() => {

    const storedName = localStorage.getItem("userName")

    if (storedName) {
      setName(storedName)
    }

  }, [])

  return (
    <>
    <div className='main-content'>
      <div className='left'>
        <h3>Welcome back, {name}</h3>
        <h5>Take a deep breath<br/>You're already done enough for today</h5>
        <p>MindEase is here to help you slow down,<br/>
          reflect, and reconnect with yourself.</p>
          <button>Begin Meditation</button><br/>
          <button>Track My Mood</button>
      </div>
      <div>
        <img src={yoga} alt='loading..' className='yoga'/>
      </div>

    </div>
    </>
  )
}

export default UserHome