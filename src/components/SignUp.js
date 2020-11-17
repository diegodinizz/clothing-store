import React from 'react'
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

class SignUp extends React.Component {
  constructor () {
    super()

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault()

    const { signUpStart } = this.props
    const { displayName, email, password, confirmPassword } = this.state

    if (password !== confirmPassword) {
      alert("passwords don't match")
      return
    }

    signUpStart({ displayName, email, password })
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  render () {
    const { displayName, email, password, confirmPassword } = this.state
    return (
      <Container>
        <Title>I do not have an account</Title>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp)
