import React,{useState,useEffect} from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { toast } from 'react-toastify'

function UserMoodTracker() {
    const navigate = useNavigate()
    const [name,setName] = useState("")
    const handleHappy = () => {
        navigate('/happy')
    }
    const hanldeSad = () => {
        navigate('/sad')
    }
    const handleAngry = () => {
        navigate('/angry')
    }
    useEffect(() => {
            const storedName = localStorage.getItem("userName");
            if (storedName) {
              setName(storedName);
            //   setIsLoggedIn(true);
            }
          }, []);
  return (
    <div>
        <div className='nav'>
              <div className='nav-left'>
                <h3>Mindease</h3>
              </div>
            <div className='nav-right'>
                <Link to={"/user-nav"} className='home'><p >Home</p></Link>
                <Link to={"/user-about"} className='about'><p >About</p></Link>
                <Link to={"/user-mood-tracker"} className='mood-tracker'><p >Mood Tracker</p></Link>
                <p>{name}</p>
                <p
            onClick={() => {
        
              localStorage.removeItem("userName");
              localStorage.removeItem("userEmail");
              navigate('/')
              window.location.reload();
            toast.success("Successfully Logged Out")
            }}
          >
            Logout
          </p>
            </div>
            </div><br/><br/>
            <div className='parent'>
                    <div className='user-card-main'>
                      <div className='user-happy' onClick={handleHappy}>
                        <span className="material-symbols-outlined">
                          sentiment_excited
                        </span>
                        <h3>Happy</h3>
                      </div>
                      
            
                      <div className='user-sad' onClick={hanldeSad}>
                        <span className="material-symbols-outlined">
                          sentiment_dissatisfied
                        </span>
                        <h3>Sad</h3>
                      </div>
                      
            
                      <div className='user-angry' onClick={handleAngry}>
                        <span className="material-symbols-outlined">
                          sentiment_extremely_dissatisfied
                        </span>
                        <h3>Angry</h3>
                      </div>
                      
            
                      {/* <div>
                        <FontAwesomeIcon icon={faFaceSurprise} />
                        <h3>Surprise</h3>
                      </div> */}
                    </div>
                  </div>
    </div>
  )
}

export default UserMoodTracker