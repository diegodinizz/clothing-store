import React from 'react'
import styled from 'styled-components'

import { Directory } from '../components/Directory'

const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`

export const Homepage = () => {
  return (
    <Home>
      <Directory />
    </Home>
  )
}
