import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchCollectionsStart } from '../redux/shop/shop.actions'

import CollectionsOverviewContainer from '../containers/CollectionsOverviewContainer'
import CollectionPageContainer from '../containers/CollectionPageContainer'

class ShopPage extends React.Component {
  componentDidMount () {
    const { fetchCollectionsStart } = this.props
    fetchCollectionsStart()
  }

  render () {
    const { match } = this.props

    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage)
