import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='nav'>
      <Link to="/">
         <h1>film <span>information</span>
         </h1>
         </Link> 

    </div>
  )
}

export default Navbar
