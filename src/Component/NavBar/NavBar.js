import React from 'react'
import { Link } from 'react-router-dom'
import './navBar.css'

export const NavBar = () => {
  return (
    <div className='navBar'>
      <p><Link to={"/"}>Home</Link></p>
      <p><Link to={"/list"}>List Data</Link></p>
      <p>Account</p>
    </div>
  )
}