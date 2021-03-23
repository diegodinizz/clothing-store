import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { CustomButton } from './CustomButton'
import { addItem } from '../redux/cart/cart.actions'

const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: url(${({ imageUrl }) => imageUrl});
`

const Container = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    ${BackgroundImage} {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`

const FooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`

const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`

const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`

const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item

  return (
    <Container>
      <BackgroundImage imageUrl={imageUrl} />
      <FooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </FooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </Container>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
