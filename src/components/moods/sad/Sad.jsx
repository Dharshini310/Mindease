import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import '../sad/Sad.css'
import { toast } from 'react-toastify';

function Sad() {
  const navigate = useNavigate()
  const [sadInput,setSadInput] = useState('');
  const handleSadSubmit = (e) =>{
    e.preventDefault();
    if(sadInput == ""){
      toast.error("Please Fill The Input")
    }
    else{
      console.log(sadInput)
      toast.success("Successfully Submitted.Wait for the reply")
      setSadInput("")
    }
  }
  return (
    <div>
       <button onClick={() => {navigate('/user-mood-tracker')}} className='sad-back-to-mood-tracker'>Back to Mood Tracker</button>
        <div className='user-input'>
          <h3>How are you Feeling Today?</h3>
          <form className='user-sad-form'>
            <input type='text' value={sadInput} onChange={(e)=>{setSadInput(e.target.value)}} placeholder='Enter your feelings'/>
            <button onClick={handleSadSubmit}>Submit</button>
          </form>
        </div>
    </div>
  )
}

export default Sad