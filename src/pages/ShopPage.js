import React from 'react'
import { Route } from 'react-router-dom'

import CollectionsOverview from '../components/CollectionsOverview'
import CollectionPage from './CollectionPage'

export const ShopPage = ({ match }) => (
  <div>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
)
