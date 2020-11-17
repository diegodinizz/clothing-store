import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './App.css'

import { Homepage } from './pages/Homepage'
import ShopPage from './pages/ShopPage'
import { SignInAndSignUpPage } from './pages/SigninAndSignupPage'
import CheckoutPage from './pages/CheckoutPage'

import Header from './components/Header'

import { selectCurrentUser } from './redux/user/user.selectors'

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount () {

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth)

    //     userRef.onSnapshot(snapShot => {
    //       setCurretUser({
    //         id: snapShot.id,
    //         ...snapShot.data()
    //       })
    //     })
    //   } else {
    //     setCurretUser(userAuth)
    //   }
    // })
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth()
  }

  render () {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(App)
