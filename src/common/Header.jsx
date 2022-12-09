import React, { Component, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Authentication from '../Auth/Authentication'
import Forget from '../components/Forget'
import Home from '../components/Home'
import Login from '../components/Login'
import Profile from '../components/Profile'
import Register from '../components/Register'
import Nav from './Nav'

class Header extends Component {
  

  render() {
    return (

    <Fragment>
        <Nav  />
        <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login   />} />
        <Route path="/profile" element={ <Authentication> <Profile /> </Authentication>} />
        <Route path="/forget" element={<Forget />} />
        </Routes>
    </Fragment>

       
        )
  }
}

export default Header