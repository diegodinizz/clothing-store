import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { clearItemfromCart } from '../redux/cart/cart.actions'

const Container = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`

const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`

const Name = styled.span`
  width: 23%;
`

const Quantity = styled.span`
  width: 23%;
  padding-left: 20px;
`

const Price = styled.span`
  width: 23%;
`

const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`

const CheckoutItem = ({ cartItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = cartItem

  return (
    <Container>
      <ImageContainer>
        <img alt='item' src={imageUrl} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>{quantity}</Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </Container>
  )
}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemfromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
