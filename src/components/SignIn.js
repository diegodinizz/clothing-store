import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { FormInput } from './FormInput'
import { CustomButton } from './CustomButton'

import { googleSignInStart, emailSignInStart } from '../redux/user/user.actions'

const Container = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
`

const Title = styled.h2`
  margin: 10px 0;
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: ''
  })

  const { email, password } = userCredentials

  const handleSubmit = async event => {
    event.preventDefault()

    emailSignInStart(email, password)
  }

  const handleChange = event => {
    const { value, name } = event.target

    setUserCredentials({ ...userCredentials, [name]: value })
  }

  return (
    <Container>
      <Title>I already have an account</Title>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={email}
          handleChange={handleChange}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='password'
          required
        />
        <ButtonsContainer>
          <CustomButton type='submit'>sign in</CustomButton>
          <CustomButton
            type='button'
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </ButtonsContainer>
      </form>
    </Container>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn)
