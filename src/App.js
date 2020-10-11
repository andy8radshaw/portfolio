import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import Portfolio from './components/pages/Portfolio'
import Contact from './components/pages/Contact'
import Navbar from './components/common/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
