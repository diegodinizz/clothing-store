import React from 'react'
import styled from 'styled-components'

import { FormInput } from './FormInput'
import { CustomButton } from './CustomButton'

import { signInWithGoogle } from '../firebase/firebase.utils'

const Container = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
`

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`

export class SignIn extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState({ email: '', password: '' })
  }

  handleChange = event => {
    const { value, name } = event.target

    this.setState({ [name]: value })
  }

  render () {
    return (
      <Container>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <Buttons>
            <CustomButton type='submit'>sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </Buttons>
        </form>
      </Container>
    )
  }
}
