import React, { useState } from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/common/Navbar'
import Home from './components/pages/Home'
import Portfolio from './components/pages/Portfolio'
import ProjectShow from './components/pages/ProjectShow'
import Contact from './components/pages/Contact'
import Experience from './components/pages/Experience'
import Footer from './components/common/Footer'
import ErrorPage from './components/common/ErrorPage'


function App() {

  const [isLightMode, setIsLightMode] = useState(true)

  const handleDarkOn = () => {
    setIsLightMode(false)
  }

  const handleDarkOff = () => {
    setIsLightMode(true)
  }

  return (
    <div className={isLightMode ? 'whole-page' : 'whole-page has-background-dark has-text-white'}>
      <BrowserRouter>
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
          <Route path="/portfolio/:id" component={ProjectShow} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/experience" component={Experience} />
          <Route path="/*" component={ErrorPage} />
        </Switch>
        <Footer isLightMode={isLightMode} />
      </BrowserRouter>
    </div>
  )
}

export default App
