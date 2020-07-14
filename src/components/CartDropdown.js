import React from 'react'
import styled from 'styled-components'

import { CustomButton } from './CustomButton'

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

const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`

const Button = styled.div`
  margin: auto;
`

export const CartDropdown = () => (
  <Container>
    <CartItems />
    <Button>
      <CustomButton>GOT TO CHECKOUT</CustomButton>
    </Button>
  </Container>
)
