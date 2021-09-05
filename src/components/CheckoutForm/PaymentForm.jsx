import React from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import { loadStripe } from '@stripe/stripe-js';
import Review from './Review';
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from '@stripe/react-stripe-js';

export default function PaymentForm({ checkoutToken }) {
  return (
    <>
      <Review checkoutToken={checkoutToken} />
    </>
  );
}
