import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { auth } from '../firebase/firebase.utils'
import CartIcon from './CartIcon'
import CartDropdown from './CartDropdown'
import { selectCurrentUser } from '../redux/user/user.selectors'
import { selectCartHidden } from '../redux/cart/cart.selectors'

import { ReactComponent as Logo } from '../assets/crown.svg'

const Container = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`

const Crown = styled.div`
  height: 100%;
  width: 70px;
  padding: 25px;
`

const Options = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const ShopOption = styled.div`
  padding: 10px 15px;
  cursor: pointer;
`

const Header = ({ currentUser, hidden }) => (
  <Container>
    <Link to='/'>
      <Crown>
        <Logo />
      </Crown>
    </Link>
    <Options>
      <Link to='shop'>
        <ShopOption>SHOP</ShopOption>
      </Link>
      <Link to='shop'>
        <ShopOption>CONTACT</ShopOption>
      </Link>
      {currentUser ? (
        <ShopOption onClick={() => auth.signOut()}>SIGN OUT</ShopOption>
      ) : (
        <Link to='signin'>
          <ShopOption>SIGN IN</ShopOption>
        </Link>
      )}
      <CartIcon />
    </Options>
    {hidden ? null : <CartDropdown />}
  </Container>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
