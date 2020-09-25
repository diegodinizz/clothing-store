import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import CollectionsOverview from '../components/CollectionsOverview'
import CollectionPage from './CollectionPage'

import {
  convertCollectionsSnapshotToMap,
  firestore
} from '../firebase/firebase.utils'

import { updateCollections } from '../redux/shop/shop.actions'

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null

  componentDidMount () {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection('collections')

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionMap)
    })
  }
  render () {
    const { match } = this.props

    return (
      <div>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)
