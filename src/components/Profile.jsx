import React, {  Fragment } from 'react'
import { useAuth } from '../context/AuthProvider';

const Profile=()=>  {

 
   const {user,logout}=useAuth();

 const   handelSubmit=()=>{
    logout();
   }
   
    return (
    <Fragment>
          <div> <br /><br /><br />
          <div className="row">
              <div className="mt-4 p-5 bg-light rounded col-lg-4 offset-lg-4">
                  <h2 className='text-center'>User Profile</h2>
                  <ul className="list-group">
                      <li className="list-group-item">Name : {user?user.name:""}</li>
                      <li className="list-group-item">Email : {user? user.email:""} </li>
                  </ul>
                  <input type="button" className="btn btn-primary" value={"Logout"} onClick={handelSubmit} /> 
              </div>
          </div>
          </div>
    </Fragment>
    )
  }

export default Profile