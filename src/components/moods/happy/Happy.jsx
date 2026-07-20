import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import '../happy/Happy.css'
import { toast } from 'react-toastify'

function Happy() {
  const navigate = useNavigate()
  const [HappyInput,setHappyInput] = useState("")
  const handleHappySubmit = (e) => {
    e.preventDefault();
    if(HappyInput == "")
    {
      toast.error("Please Fill The Form")
    }
    else{
      console.log(HappyInput)
      toast.success("Successfully Submitted.Please wait for the reply")
      setHappyInput("")
    }
  }
  return (
    <div>
        <button onClick={() => {navigate('/user-mood-tracker')}} className='happy-back-to-mood-tracker'>Back to Mood Tracker </button>
        <div className='user-input'>
          <h3>How are you Feeling Today?</h3>
          <form className='user-sad-form'>
            <input type='text' value={HappyInput} onChange={(e) => {setHappyInput(e.target.value)}} placeholder='Enter your feelings'/>
            <button onClick={handleHappySubmit}>Submit</button>
          </form>
        </div>
    </div>
  )
}

export default Happy