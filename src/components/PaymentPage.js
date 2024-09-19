import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm'; // 支付表单组件

// 加载Stripe的公钥
const stripePromise = loadStripe('your-public-stripe-key-here');

const PaymentPage = () => {
  return (
    
    <Elements stripe={stripePromise} options={{ locale: 'en' }}> {/* 设置语言为英文 */}
      <CheckoutForm />
    </Elements>

    
  );
};

export default PaymentPage;
