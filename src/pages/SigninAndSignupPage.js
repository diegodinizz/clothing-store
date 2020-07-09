import React from 'react'
import styled from 'styled-components'

import { SignIn } from '../components/SignIn'
import { SignUp } from '../components/SignUp'

const Container = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
`

export const SignInAndSignUpPage = () => (
  <Container>
    <SignIn />
    <SignUp />
  </Container>
)
