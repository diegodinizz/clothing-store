import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { toggleCartHidden } from '../redux/cart/cart.actions'
import { selectCartItemsCount } from '../redux/cart/cart.selectors'

import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg'

const Container = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const ShoppingIconContainer = styled.div`
  width: 24px;
  height: 24px;
`

const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <Container onClick={toggleCartHidden}>
    <ShoppingIconContainer>
      <ShoppingIcon />
    </ShoppingIconContainer>
    <ItemCount>{itemCount}</ItemCount>
  </Container>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
