import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
  flex-shrink: 0;
`

const CartItemImage = styled.img`
  width: 30%;
`

const ItemDetailsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`

export const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <Container>
    <CartItemImage src={imageUrl} alt='item' />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </Container>
)
