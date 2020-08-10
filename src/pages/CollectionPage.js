import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import CollectionItem from '../components/CollectionItem'

import { selectCollection } from '../redux/shop/shop.selectors'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`

const Collections = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`

const Items = styled(Collections)`
  margin-bottom: 30px;
`

const CollectionPage = ({ collection }) => {
  const { title, items } = collection
  return (
    <Container>
      <Title>{title}</Title>
      <Collections>
        {items.map(item => (
          <Items key={item.id}>
            <CollectionItem item={item} />
          </Items>
        ))}
      </Collections>
    </Container>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)
