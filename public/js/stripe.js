/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable node/no-unsupported-features/es-syntax */
import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51M6wkJFqdF1r0m2kfu0OdNPjmjwOnIaEiMVmK3OcgzCZGgcDkj8Disot7gheUyJr0etVfDO9WdmeORDjCMT3hBvf00TF92oigt'
);

export const bookTour = async (tourId) => {
  try {
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert('error', err);
  }
};
