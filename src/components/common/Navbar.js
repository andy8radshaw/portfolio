import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import andyImage from '../../assets/pixel-andy-small.png'


export default function Navbar() {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false)
  const handleBurger = () => {
    setBurgerIsOpen(!burgerIsOpen)
  }
  const handleHomeIcon = () => {
    if (burgerIsOpen) setBurgerIsOpen(false)
  }

  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" href="https://bulma.io" onClick={handleHomeIcon}>
          <img src={andyImage} alt="pixel andy" />
        </Link>

        <span
          role="button"
          className={`navbar-burger ${burgerIsOpen ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={handleBurger}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </span>
      </div>

      <div className={`navbar-menu ${burgerIsOpen ? 'is-active' : ''}`}>
        <div className="navbar-end">
          <Link className="navbar-item" to="/portfolio" onClick={handleBurger}>
            portfolio
          </Link>
          <Link className="navbar-item" to="/contact" onClick={handleBurger}>
            say hello
          </Link>
        </div>
      </div>
    </nav>
  )
}
