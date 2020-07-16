import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import { CustomButton } from './CustomButton'
import { CartItem } from './CartItem'

import { selectCartItems } from '../redux/cart/cart.selectors'

import { toggleCartHidden } from '../redux/cart/cart.actions'

const Container = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`

const Cart = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`

const Button = styled.div`
  margin: auto;
`

const EmptyCart = styled.span`
  font-size: 18px;
  margin: 50px auto;
`

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <Container>
    <Cart>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyCart>Your cart is empty</EmptyCart>
      )}
    </Cart>
    <Button>
      <CustomButton
        onClick={() => {
          history.push('/checkout')
          dispatch(toggleCartHidden())
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </Button>
  </Container>
)

const mapStatetoProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStatetoProps)(CartDropdown))
