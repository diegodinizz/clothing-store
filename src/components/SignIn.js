import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { FormInput } from './FormInput'
import { CustomButton } from './CustomButton'

import { auth, signInWithGoogle } from '../firebase/firebase.utils'
import { googleSignInStart } from '../redux/user/user.actions'

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

class SignIn extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault()

    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: '', password: '' })
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = event => {
    const { value, name } = event.target

    this.setState({ [name]: value })
  }

  render () {
    const { googleSignInStart } = this.props
    return (
      <Container>
        <Title>I already have an account</Title>
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
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart())
})

export default connect(null, mapDispatchToProps)(SignIn)
