import React, { useContext, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { UserContext } from "../../../App";

const Payment = () => {

        const [payment,setPayment]=useState([])
        const stripe = useStripe();
        const elements = useElements();

        const handleSubmit = async (event) => {
            
        event.preventDefault();

        if (!stripe || !elements) {
        return;
        }
        const cardElement = elements.getElement(CardElement);
        const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        });

        if (error) {
        console.log('[error]', error);
        } else {
          setPayment(paymentMethod);
          alert('Your payment done successfully.Now book your appointment.Thanks')
          const paymentInfo={
            cardName:payment.card.brand,
            country:payment.card.country,
        }
        }

    };

  return (
        <div>
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button className='mt-4 btn btn-danger' type="submit" disabled={!stripe}>
              Done Payment
            </button>
        </form>
        </div>
  );
};

export default Payment;
