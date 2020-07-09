import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'

import { Homepage } from './pages/Homepage'
import { ShopPage } from './pages/ShopPage'
import { SignInAndSignUpPage } from './pages/SigninAndSignupPage'
import { Header } from './components/Header'
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})

      console.log(user)
    })
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth()
  }

  render () {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    )
  }
}

export default App
