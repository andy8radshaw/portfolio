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
    console.log('i want dark theme on now!')
    setIsLightMode(false)
  }

  const handleDarkOff = () => {
    console.log('actually no light theme please')
    setIsLightMode(true)
  }

  return (
    <div className={isLightMode ? 'light-theme' : 'dark-theme'}>
      <BrowserRouter>
        <Navbar 
          handleDarkOn={handleDarkOn}
          handleDarkOff={handleDarkOff}
          isLightMode={isLightMode}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio/:id" component={ProjectShow} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/experience" component={Experience} />
          <Route path="/*" component={ErrorPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
