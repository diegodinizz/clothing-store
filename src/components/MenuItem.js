import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: url(${props => props.image});
`

const Content = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`

const ItemMenu = styled.div`
  min-width: 30%;
  height: 290px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  :hover {
    cursor: pointer;

    ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    ${Content} {
      opacity: 0.9;
    }
  }

  &.large {
    height: 450px;
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`

const Title = styled.h1`
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`

const Subtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <ItemMenu
      className={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImage image={imageUrl} />
      <Content>
        <Title>{title.toUpperCase()}</Title>
        <Subtitle>SHOP NOW</Subtitle>
      </Content>
    </ItemMenu>
  )
}

export default withRouter(MenuItem)
