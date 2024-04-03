import React from 'react'
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();
  return (
    <>
    <div className='body'>
      <div className='containerHome1'>
        <div className='container2Home'>
        <button onClick={() => navigate("/TrackBus")}>
        <p1 style={{ color: 'black', fontFamily: 'Arial', fontSize: '10px', fontWeight: 'bold' }}>Track bus</p1>
            </button>
         
          {/* <img  alt='loading' src="./trackbus.png"/>  */}
          </div>
        <div className='container2Home'>
        <button onClick={() => navigate("/MngStaff")}>
        <p1 style={{ color: 'black', fontFamily: 'Arial', fontSize: '10px', fontWeight: 'bold' }}>Manage Staff & Bus</p1>
            </button>
        
        </div>
        <div className='container2Home'>
        <button onClick={() => navigate("/Mngstd")}>
        <p1 style={{ color: 'black', fontFamily: 'Arial', fontSize: '10px', fontWeight: 'bold' }}>Manage Student</p1>
            </button>
         
          </div>
        <div className='container2Home'>
        <button onClick={() => navigate("/AddBusRoute")}>
        <p1 style={{ color: 'black', fontFamily: 'Arial', fontSize: '10px', fontWeight: 'bold' }}>Add Bus Routes</p1>
            </button>
       
        </div>
        <div className='container2Home'>
        <button onClick={() => navigate("/MngPayment")}>
        <p1 style={{ color: 'black', fontFamily: 'Arial', fontSize: '10px', fontWeight: 'bold' }}>Manage payment</p1>
            </button>
        
        </div>
        <div className='container2Home'>
        <button onClick={() => navigate("/UpdateNotifications")}>
        <p1 style={{ color: 'black', fontFamily: 'Arial', fontSize: '10px', fontWeight: 'bold' }}>Update Notifications</p1>
        </button>
        </div>



       
      </div>
     
    </div>
    </>
  )
}

export default Home