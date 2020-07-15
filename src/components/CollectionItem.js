import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { CustomButton } from './CustomButton'
import { addItem } from '../redux/cart/cart.actions'

const Image = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: url(${props => props.image});
`

const Container = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  button {
    width: 50%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  :hover {
    ${Image} {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`

const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`

const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
  margin-right: 50%;
`

const Price = styled.span`
  width: 10%;
`

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item

  return (
    <Container>
      <Image image={imageUrl} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </Container>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
