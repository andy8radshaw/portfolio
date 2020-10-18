import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Typewriter from './Typewriter'

import andyImage from '../../assets/pixel-andy-small.png'


export default function Navbar() {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false)
  const [settingsIsOpen, setSettingsIsOpen] = useState(false)
  const [isLightMode, setIsLightMode] = useState(true)
  const [typwriterIsOn, setTypewriterIsOn] = useState(true)

  const handleBurger = () => {
    setBurgerIsOpen(!burgerIsOpen)
  }

  const handleSettings = () => {
    setSettingsIsOpen(!settingsIsOpen)
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

  const handleTypewriterOn = () => {
    setTypewriterIsOn(true)
  }

  const handleTypewriterOff = () => {
    setTypewriterIsOn(false)
  }


  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" href="https://bulma.io" onClick={handleHomeIcon}>
          <img src={andyImage} alt="pixel andy" />
        </Link>
        <Typewriter isHidden={typwriterIsOn} />

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
          <Link className="navbar-item" to="/experience" onClick={handleBurger}>
            experience
          </Link>
          <Link className="navbar-item" to="/portfolio" onClick={handleBurger}>
            portfolio
          </Link>
          <Link className="navbar-item" to="/contact" onClick={handleBurger}>
            say hello
          </Link>
          <div className={settingsIsOpen ? 'navbar-item has-dropdown is-active' : 'navbar-item has-dropdown'} >
            <span onClick={handleSettings} className="navbar-link is-arrowless">
              <span className={settingsIsOpen ? 'icon is-hidden' : 'icon'}>
                <i className='fas fa-cog'></i>
              </span>
              <span className={!settingsIsOpen ? 'icon is-hidden' : 'icon'}>
                <i className='fas fa-times'></i>
              </span>
            </span>
            <div className="navbar-dropdown is-right">
              <div className="navbar-item dropdown">
                <div className="tags">
                  <span className="tag is-white">dark mode</span>
                  <span onClick={handleDarkMode} className={isLightMode ? 'tag is-light' : 'tag is-primary'}>on</span>
                  <span onClick={handleLightMode} className={isLightMode ? 'tag is-danger' : 'tag is-dark'}>off</span>
                </div>
              </div>
              <hr className="navbar-divider"></hr>
              <div className="navbar-item dropdown">
                <div className="tags">
                  <span className="tag is-white">typewriter</span>
                  <span onClick={handleTypewriterOn} className={typwriterIsOn ? 'tag is-primary' : 'tag is-light'}>on</span>
                  <span onClick={handleTypewriterOff} className={typwriterIsOn ? 'tag is-light' : 'tag is-danger'}>off</span>
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