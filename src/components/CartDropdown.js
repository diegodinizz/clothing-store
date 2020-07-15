import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { CustomButton } from './CustomButton'
import { CartItem } from './CartItem'
import { selectCartItems } from '../redux/cart/cart.selectors'

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

const CartDropdown = ({ cartItems }) => (
  <Container>
    <Cart>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </Cart>
    <Button>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </Button>
  </Container>
)

const mapStatetoProps = state => ({
  cartItems: selectCartItems(state)
})

export default connect(mapStatetoProps)(CartDropdown)
