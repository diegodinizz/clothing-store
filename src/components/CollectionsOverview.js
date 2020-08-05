import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { CollectionPreview } from './CollectionPreview'
import { selectCollections } from '../redux/shop/shop.selectors'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const CollectionsOverview = ({ collections }) => (
  <Container>
    {collections.map(({ id, ...otherCollectionsProps }) => (
      <CollectionPreview key={id} {...otherCollectionsProps} />
    ))}
  </Container>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview)
