import React from 'react'
import {ImSpoonKnife} from 'react-icons/im'
import "../Styles/header.css"

const Header = () => {
  return (
    <header className='header'>
    <div className='layer'>
    <div className="container">
      <div className='header-text' >
        <h1>Recipe Finder</h1>
        <p>Let's make the food together...</p>
      </div>
      <nav className='logo-wrapper'>
        <div className='logo_header'>
          <ImSpoonKnife className='brand' />
        </div>
      </nav>
      <div className='content'>
        <p>
         <h1>Welcome to our Recipe <p>Finder!</p></h1>
         Say goodbye to mealtime dilemmas and hello to flavor-packed adventures.
        </p>
      </div>
    </div>
    </div>
  </header>
  )
}

export default Header