import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { clearCart } from '../redux/cart/cart.actions'

const StripeCheckoutButton = ({ price, history, clearCart }) => {
  const priceForStripe = price * 100
  const publishableKey =
    'pk_test_51HEwahKGyWO5ehPzZiFa0nrzo4bOlYMR91wOyyI6Mdommlaf6vJeJPnoYc2rHSXSc853PcXShwiFxZCR5PfGNri80013NZ7lwW'

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert('Payment succesful')
        clearCart()
        history.push('/')
      })
      .catch(error => {
        console.log('Payment error: ', JSON.parse(error))
        alert(
          'There was an issue with your payment. Please sure you use the provided credit card.'
        )
      })
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='Clothing Store'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is £${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
      currency='GBP'
    />
  )
}

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart())
})

export default withRouter(
  connect(null, mapDispatchToProps)(StripeCheckoutButton)
)
