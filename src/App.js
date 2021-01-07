import React, { useState, useEffect } from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/common/Navbar'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import ErrorPage from './components/common/ErrorPage'

import Home from './components/pages/home/Home'
import Portfolio from './components/pages/portfolio/Portfolio'
import ProjectShow from './components/pages/projectShow/ProjectShow'
import Experience from './components/pages/experience/Experience'


function App() {

  const [isLightMode, setIsLightMode] = useState(true)

  useEffect(() => {
    const getLightMode = localStorage.getItem('isLightMode') === 'true'
    setIsLightMode(getLightMode)
  }, [isLightMode])

  const handleDarkOn = () => {
    localStorage.setItem('isLightMode', 'false')
    setIsLightMode(false)
  }

  const handleDarkOff = () => {
    localStorage.setItem('isLightMode', 'true')
    setIsLightMode(true)
  }

  return (
    <div className={isLightMode ? 'whole-page' : 'whole-page has-background-dark has-text-white'}>
      <BrowserRouter>
        <Header />
        <Navbar
          handleDarkOn={handleDarkOn}
          handleDarkOff={handleDarkOff}
          isLightMode={isLightMode}
        />
        <Switch>
          <Route
            exact path="/"
            render={(props) => (
              <Home {...props} isLightMode={isLightMode} />
            )}
          />
          <Route
            path="/portfolio/:id"
            render={(props) => (
              <ProjectShow {...props} isLightMode={isLightMode} />
            )}
          />
          <Route
            path="/portfolio"
            render={(props) => (
              <Portfolio {...props} isLightMode={isLightMode} />
            )}
          />
          <Route
            path="/experience"
            render={(props) => (
              <Experience {...props} isLightMode={isLightMode} />
            )}
          />
          <Route
            path="/*"
            render={(props) => (
              <ErrorPage {...props} isLightMode={isLightMode} />
            )}
          />
        </Switch>
        <Footer isLightMode={isLightMode} />
      </BrowserRouter>
    </div>
  )
}

export default App
