import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import CollectionsOverview from '../components/CollectionsOverview'
import CollectionPage from './CollectionPage'

import { WithSpinner } from '../components/WithSpinner'

import {
  convertCollectionsSnapshotToMap,
  firestore
} from '../firebase/firebase.utils'

import { updateCollections } from '../redux/shop/shop.actions'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
  state = {
    loading: true
  }

  unsubscribeFromSnapshot = null

  componentDidMount () {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection('collections')

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionMap)
      this.setState({ loading: false })
    })
  }
  render () {
    const { match } = this.props
    const { loading } = this.state

    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
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
