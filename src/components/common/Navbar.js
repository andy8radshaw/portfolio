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
    <nav className={isLightMode ? 'navbar is-light' : 'navbar is-dark'} role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item nav-button" href="https://bulma.io" onClick={handleHomeIcon}>
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
            <Link className="navbar-item nav-button" to="/experience" onClick={handleBurger}>
              experience
            </Link>
            <Link className="navbar-item nav-button" to="/portfolio" onClick={handleBurger}>
              portfolio
            </Link>
            <Link className="navbar-item nav-button" to="/contact" onClick={handleBurger}>
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
              <div className={isLightMode ? 'navbar-dropdown has-background-danger is-boxed is-right' : 'navbar-dropdown is-boxed is-right has-background-success'}>
                <div className="navbar-item dropdown">
                  <div className="tags">
                    <span className={isLightMode ? 'tag is-danger' : 'tag is-success'}>dark mode:</span>
                    <span onClick={handleDarkOn} className={isLightMode ? 'tag is-white' : 'tag is-warning'}>on</span>
                    <span onClick={handleDarkOff} className={isLightMode ? 'tag is-link' : 'tag is-white'}>off</span>
                  </div>
                </div>
                <hr className="navbar-divider"></hr>
                <div className="navbar-item dropdown">
                  <div className="tags">
                    <span className={isLightMode ? 'tag is-danger' : 'tag is-success'}>typewriter:</span>
                    <span onClick={handleTypewriterOn} className={typwriterIsOn ? 'tag is-warning' : 'tag is-white'}>on</span>
                    <span onClick={handleTypewriterOff} className={typwriterIsOn ? 'tag is-white' : 'tag is-link'}>off</span>
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