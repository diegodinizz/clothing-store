import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

import CollectionItem from './CollectionItem'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`

const TitleContainer = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;

  &:hover {
    color: grey;
  }
`

const Preview = styled.div`
  display: flex;
  justify-content: space-between;
`

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <Container>
    <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title.toUpperCase()}
    </TitleContainer>
    <Preview>
      {items
        .filter((item, index) => index < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </Preview>
  </Container>
)

export default withRouter(CollectionPreview)
