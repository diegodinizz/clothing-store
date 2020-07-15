import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`

const Image = styled.img`
  width: 30%;
`

const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`

const Name = styled.span`
  font-size: 16px;
`

export const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <Container>
    <Image src={imageUrl} alt='item' />
    <ItemDetails>
      <Name>{name}</Name>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetails>
  </Container>
)
