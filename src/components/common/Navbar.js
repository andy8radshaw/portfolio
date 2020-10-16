import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Typewriter from './Typewriter'

import andyImage from '../../assets/pixel-andy-small.png'


export default function Navbar() {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false)
  const [isLightMode, setIsLightMode] = useState(false)

  const handleBurger = () => {
    setBurgerIsOpen(!burgerIsOpen)
  }
  const handleHomeIcon = () => {
    if (burgerIsOpen) setBurgerIsOpen(false)
  }

  const handleLightMode = () => {
    setIsLightMode(true)
  }

  const handleDarkMode = () => {
    setIsLightMode(false)
  }


  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" href="https://bulma.io" onClick={handleHomeIcon}>
          <img src={andyImage} alt="pixel andy" />
        </Link>
        <Typewriter />

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
          <div className="navbar-item has-dropdown is-hoverable">
            <span className="navbar-link">settings...</span>
            <div className="navbar-dropdown">
              <div className="navbar-item">
                <div className="tags has-addons">
                  <span onClick={handleLightMode} className={isLightMode ? 'tag is-primary' : 'tag is-dark'}>light</span>
                  <span onClick={handleDarkMode} className={isLightMode ? 'tag is-light' : 'tag is-primary'}>dark</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </nav>
  )
}


{/* <div class="navbar-item has-dropdown">
    <a class="navbar-link">
      Docs
    </a>

    <div class="navbar-dropdown">
      <a class="navbar-item">
        Overview
      </a>
      <a class="navbar-item">
        Elements
      </a>
      <a class="navbar-item">
        Components
      </a>
      <hr class="navbar-divider">
      <div class="navbar-item">
        Version 0.9.1
      </div>
    </div>
  </div> */}