import React, { useState } from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/common/Navbar'
import Home from './components/pages/Home'
import Portfolio from './components/pages/Portfolio'
import ProjectShow from './components/pages/ProjectShow'
import Contact from './components/pages/Contact'
import Experience from './components/pages/Experience'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import ErrorPage from './components/common/ErrorPage'


function App() {

  const [isLightMode, setIsLightMode] = useState(false)

  const handleDarkOn = () => {
    setIsLightMode(false)
  }

  const handleDarkOff = () => {
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
            path="/contact"
            render={(props) => (
              <Contact {...props} isLightMode={isLightMode} />
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
