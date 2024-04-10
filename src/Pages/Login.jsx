import React, { useState } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import '../App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css'
import loginpng from '../assets/images/login.jpg'


function Login() {
    const navigate = useNavigate()

const [userdetails,setuserdetails]= useState({email:"",Password:""})

console.log(userdetails);
const handlelogin=()=>{
    if(userdetails.email && userdetails.Password){
        toast.success("Succesfully logedin")
        navigate('/Home')

    }else{
toast.warning("Please Fill The Form Completely")
    }
}

    return (
        <>
            <div className='container'>
                <h1 className='heading'>Log in Form</h1>
                <div className='form-container'>
                    <div style={{marginLeft: '200px'}} className='left'>
                        <img style={{height: '450px',width: '500px',marginTop: '50px'}} className='img' src={loginpng} alt="login" />
                    </div>
                    <div style={{marginLeft: '500px'}} className='right'>
                    <h2 className='from_heading'>Members Log in</h2>
                    <input type='text' className="input" placeholder="Email" value={userdetails.email} onChange={(e)=>setuserdetails({...userdetails,email : e.target.value})} />
                    <input type='text' className="input" placeholder="Password" value={userdetails.Password} onChange={(e)=>setuserdetails({...userdetails,Password : e.target.value})}/>
                    <button className='btn' onClick={handlelogin}>Log in</button>
                    <p className='text'>or</p>
                    <div className='text-center mt-3 container '>
                    <div>
                        <GoogleLogin 
                            onSuccess={credentialResponse => {
                                const ResponseDecoded = jwtDecode(credentialResponse.credential);
                                console.log(ResponseDecoded);
                                sessionStorage.setItem("userName", ResponseDecoded.name);
                                sessionStorage.setItem("Image", ResponseDecoded.picture)
                                navigate('/Home')
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />;
                    </div>
                    </div>
                    </div>
                </div>
                   

                </div>
            <ToastContainer position='top-center' theme='colored' autoClose={2000} />
        </>
    )
}

export default Login
