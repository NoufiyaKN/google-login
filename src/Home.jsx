

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Home() {

  const navigate = useNavigate()
  const handlelogout = () => {
    sessionStorage.removeItem("userName");
    setuserdetail('');
    toast.success("Signout Successfully")
    navigate('/')
  }
  const [userdetail, setuserdetail] = useState("")

  useEffect(() => {
    if (sessionStorage.getItem('userName')) {
      setuserdetail(sessionStorage.getItem("userName"))
    }
  }, [])

  return (


    <div style={{ height: "100vh" }} className=' p-5 w-100'>
      <div style={{ height: '85vh' }} className=' w-50 container d-flex flex-column justify-content-between' >
        <div>

        <div className='text-center'><i class="fa-brands fa-slack"></i>
          </div>
          <h2 className='text-center' >Welcome {userdetail} </h2>
       <img className='mb-1' src="https://t3.ftcdn.net/jpg/01/76/98/40/360_F_176984023_8I82qQPmKn8TqNAZXIYMCSiwccoUiPBg.jpg" alt="" />
        </div>
        <div>
        <div className='text-center mb-4 '><button onClick={handlelogout} className='btn btn-success border-rounded'>Logout</button>
          </div>

        </div>
        
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />

    </div>

  )
}

export default Home