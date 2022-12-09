import axios from 'axios';
import React, { useState } from 'react'
import { Link  } from 'react-router-dom'

import "./loader.css"
import { useAuth } from '../context/AuthProvider';
const LOGIN_URL="/login";
const Login=()=> {
      const[email ,setEmail] =  useState("");
      const[password ,setPassword] =  useState("");
      const[message ,setMessage] =  useState("");
      const[loading ,setLoading] =  useState(false);
      // const[loading ,setLoading] =  useState(false);

      const {login}=useAuth();

      // if user logged in success redirect to profile component
      // useEffect(()=>{
      //   if(loggedIn){
      //     navigate ("/profile");
      //   }

      // }, [loggedIn,])
    
      
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
          const response = await axios.post(LOGIN_URL,{ email, password }
          );
          const token = response?.data?.token;
          const userName = response?.data?.user.name;
          const userEmail = response?.data?.user.email;
          setEmail('');
          setPassword('');
          setLoading(false);
          login(token,userName,userEmail);
        } catch ( err) {
          setLoading(false);

          setMessage(err.response?.data?.message);
        
      }
  }

      return (

        <>
      <div> <br /><br /><br />
        <div className="row">
            <div className="mt-4 p-5 bg-light rounded col-lg-4 offset-lg-4">
                <h2 className='text-center'>Login Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label  className="form-label">Email address</label>
                        <input 
                          type="email" 
                          className="form-control" 
                          onChange={(e)=>setEmail(e.target.value)}
                          value={email}
                          />
                    </div>
                    <div className="mb-3">
                        <label   className="form-label">Password</label>
                        <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" >Check me out</label>
                    </div>
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary ">{ ! loading? "Login" :
                         <span className="loader"></span>
                         }
                        </button>
                    </div>  
                    <span className='text-danger'>
                       {message}
                    </span>                  <br /><br />
                 <Link to='/forget'>Forgot password?</Link>
                </form>

            </div>
        </div>
      </div>
        
      </>
    )
  }
// }

export default Login