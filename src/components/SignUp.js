import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { FormInput } from './FormInput'
import { CustomButton } from './CustomButton'

import { signUpStart } from '../redux/user/user.actions'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
`

const Title = styled.h2`
  margin: 10px 0;
`

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const { displayName, email, password, confirmPassword } = userCredentials

  const handleSubmit = async event => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert("passwords don't match")
      return
    }

    signUpStart({ displayName, email, password })
  }

  const handleChange = event => {
    const { name, value } = event.target

    setUserCredentials({ ...userCredentials, [name]: value })
  }

  return (
    <Container>
      <Title>I do not have an account</Title>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </Container>
  )
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp)
