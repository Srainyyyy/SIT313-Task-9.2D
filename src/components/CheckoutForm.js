import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button } from 'semantic-ui-react';
import './LoginPage.css';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(false);
    } else {
      setPaymentError(null);
      setPaymentSuccess(true);
      alert('Payment successful!');
    }
  };

  return (
    <div className="login-page">
      <div className="checkout-form-container">
      <h1 className="form-title">Enter your payment details</h1>
    <form onSubmit={handleSubmit}>
      <CardElement />
      <Button primary className="pay-button" type="submit" disabled={!stripe}>Pay Now</Button>
      {paymentError && <p style={{ color: 'red' }}>{paymentError}</p>}
      {paymentSuccess && <p style={{ color: 'green' }}>Payment Successful!</p>}
    </form>
    </div>
    </div>
  );
};

export default CheckoutForm;
