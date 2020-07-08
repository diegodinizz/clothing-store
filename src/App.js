import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'

import { Homepage } from './pages/Homepage'
import { ShopPage } from './pages/ShopPage'
import { SignInAndSignUpPage } from './pages/SigninAndSignupPage'
import { Header } from './components/Header'

function App () {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  )
}

export default App
