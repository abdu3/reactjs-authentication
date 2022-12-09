import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider';

export default function Register() {
   const [name,setName] = useState("");
   const [email,setEmail] = useState("");
   const [password,setPassword] = useState("");
   const [password_confirmation,setCPassword] = useState("");
   /// errors states
   const[nameError ,setNameError] =  useState("");
   const[emailError ,setEmailError] =  useState("");
   const[passwordError ,setPasswordError] =  useState("");
   const[loading ,setLoading] =  useState(false);
   // const[loading ,setLoading] =  useState(false);

   const {login}=useAuth();

    const handleForm= async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            const response = await 
                                axios.post("/register",
                                {
                                    name,
                                    email,
                                    password,
                                    password_confirmation
                                });

            const token=response.data.token;
            const userName=response.data.user.name;
            const userEmail=response.data.user.email;
            login(token,userName,userEmail);
            setName('');
            setEmail('');
            setPassword('');
            setCPassword('');
            setLoading(false);
          } catch ( err) {
            setNameError(err.response?.data?.errors.name);
            setEmailError(err.response?.data?.errors.email);
            setPasswordError(err.response?.data?.errors.password);
            setLoading(false);
        }
    }
  return (
    <div> <br /><br /><br />
    <div className="row">
        <div className="mt-4 p-5 bg-light rounded col-lg-4 offset-lg-4">
            <h2 className='text-center'>Register Account</h2>
            <form onSubmit={handleForm}>
                <div className="mb-3">
                    <label  className="form-label">User Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        onChange={(e)=>setName(e.target.value)} />
                    <span className='text-danger'>
                       {nameError}
                    </span>     
                </div>
                <div className="mb-3">
                    <label  className="form-label">Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        onChange={(e)=>setEmail(e.target.value)}/>
                    <span className='text-danger'>
                       {emailError}
                    </span> 
                </div>
                <div className="mb-3">
                    <label  className="form-label">Password</label>
                    <input 
                        type="password"
                        className="form-control"
                        onChange={(e)=>setPassword(e.target.value)}/>
                    <span className='text-danger'>
                       {passwordError}
                    </span> 
                </div>
                <div className="mb-3">
                    <label  className="form-label">Confirm Password</label>
                    <input 
                        type="password"
                        className="form-control"
                        onChange={(e)=>setCPassword(e.target.value)}/> 
                </div>
                <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary ">{ ! loading? "Register" :
                         <span className="loader"></span>
                         }
                 </button>
                </div>
                {/* <span className='text-danger'>
                       {emailError}
                </span>   */}
                                 <br /><br />
                Have an account? <Link to='/login'>Login</Link>
            </form>
        </div>
    </div>
  </div>
  )
}
