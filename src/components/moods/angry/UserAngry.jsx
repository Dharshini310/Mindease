import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../angry/Angry.css'
import { toast } from 'react-toastify';

function UserAngry() {
    const navigate = useNavigate()
    const [AngryInput,SetAngryInput] = useState('');
    const handleHappySubmit = (e) =>{
        e.preventDefault();
        if(AngryInput == ""){
            toast.error("Please Fill The Form")
        }
        else{
            console.log(AngryInput)
            toast.success("Successfully Submitted.Please wait for the reply")
            SetAngryInput("")
        }
    }
    return (

        <div>
            <button onClick={() => { navigate('/user-mood-tracker') }} className='user-angry-back-to-mood-tracker'>Back to Mood Tracker</button>
            <div className='user-input-angry'>
                <h3>How are you Feeling Today?</h3>
                <form className='user-user-sad-form'>
                    <input type='text' value={AngryInput} onChange={(e) => {SetAngryInput(e.target.value)}} placeholder='Enter your feelings' />
                    <button onClick={handleHappySubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default UserAngry