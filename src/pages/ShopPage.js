import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { CollectionPreview } from '../components/CollectionPreview'

import { selectCollections } from '../redux/shop/shop.selectors'

const ShopPage = ({ collections }) => (
  <div>
    {collections.map(({ id, ...otherCollectionsProps }) => (
      <CollectionPreview key={id} {...otherCollectionsProps} />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage)
