
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ChechoutForm = ({ appointment }) => {
    const { price, patientEmail, patientName, _id } = appointment.data;

    const [cardError, setCardError] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('')
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [proccessing, setProccessing] = useState(false);


    useEffect(() => {
        axios.post('https://lit-reaches-57483.herokuapp.com/create-payment-intent', { price }, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }

        ).then(response => {
            if (response.data?.clientSecret) {
                setClientSecret(response.data.clientSecret)
            }
        })
    }, [price])
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {

            return
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });


        if (error) {
            setCardError(error.message)

        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError('')
        }
        setProccessing(true)
        // confirm payment
        const { paymentIntent, error: intendError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: patientEmail,

                    },
                },
            },
        );
        if (intendError) {
            setProccessing(false)
            setCardError(intendError?.message)
            setSuccess('');

        }
        else {
            setCardError('')
            console.log(paymentIntent);
            setSuccess('Your Payment is successful')
            setTransactionId(paymentIntent.id)
            // store payment on database
            const payment = {
                appointment: _id,
                transactionId: paymentIntent.id
            }
            axios.put(`https://lit-reaches-57483.herokuapp.com/booking/${_id}`, payment, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            }).then(response => {
                setProccessing(false)
                console.log(response.data)
            })
        }

    }
    return (
        <>

            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            <span className='text-red-500'>{cardError}</span>
            {
                success && <div className='text-green-500'><p>{success}</p>
                    <p>Your Transaction id:<span className="text-orange-500 font-bold">{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default ChechoutForm;