import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Typewriter from './Typewriter'

import andyImage from '../../assets/pixel-andy-small.png'


export default function Navbar({ handleDarkOn, handleDarkOff, isLightMode }) {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false)
  const [settingsIsOpen, setSettingsIsOpen] = useState(false)
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

  

  const handleTypewriterOn = () => {
    setTypewriterIsOn(true)
  }

  const handleTypewriterOff = () => {
    setTypewriterIsOn(false)
  }



  return (
    <nav className={isLightMode ? 'navbar is-fixed-top' : 'navbar is-fixed-top is-dark'} role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" href="https://bulma.io" onClick={handleHomeIcon}>
            <img src={andyImage} alt="pixel andy" />
          </Link>
          <Typewriter
            isHidden={typwriterIsOn}
          />

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

        <div className={`navbar-menu has-text-centered-touch ${burgerIsOpen ? 'is-active' : ''}`}>
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
            <div className={settingsIsOpen ? 'navbar-item has-dropdown is-hoverable is-active' : 'navbar-item is-hoverable has-dropdown'} >
              {/* <div className='navbar-item has-dropdown is-hoverable'> */}
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
                    <span onClick={handleDarkOn} className={isLightMode ? 'tag is-light' : 'tag is-warning'}>on</span>
                    <span onClick={handleDarkOff} className={isLightMode ? 'tag is-warning' : 'tag is-light'}>off</span>
                  </div>
                </div>
                <hr className="navbar-divider"></hr>
                <div className="navbar-item dropdown">
                  <div className="tags">
                    <span className="tag is-white">typewriter</span>
                    <span onClick={handleTypewriterOn} className={typwriterIsOn ? 'tag is-warning' : 'tag is-light'}>on</span>
                    <span onClick={handleTypewriterOff} className={typwriterIsOn ? 'tag is-light' : 'tag is-warning'}>off</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </nav>
  )
}