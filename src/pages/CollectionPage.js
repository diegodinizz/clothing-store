import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import CollectionItem from '../components/CollectionItem'

import { selectCollection } from '../redux/shop/shop.selectors'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const TitleContainer = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`

const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px 25px;

  & > div {
    margin-bottom: 30px;
  }
`

const CollectionPage = ({ collection }) => {
  const { title, items } = collection
  return (
    <Container>
      <TitleContainer>{title}</TitleContainer>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </Container>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)
