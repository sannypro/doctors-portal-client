import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from './Pages/Shared/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L0j5UHw1ppVQWndFtGKSCw5rDU15PD6vBHX3o3Oi9OAtC6BF1Xak8n06YD4S8LxEl78IpklBsg7ZGrfku1vAymo00XYkGq7Yt');
const Payment = () => {
    const { id } = useParams();
    const url = `https://lit-reaches-57483.herokuapp.com/booking/${id}`;
    const { data: appointment, isLoading } = useQuery(['booking', id], () => axios.get(url, {

        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }

    }))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>

            <div class="card w-50  max-w-md bg-base-100  shadow-xl my-12 mx-auto">
                <div class="card-body">
                    <p className='text-success font-bold'>Hello, {appointment?.data.patientName}</p>
                    <h2 class="card-title">Pay for  {appointment?.data.treatment}</h2>
                    <p>Your Appointment: <span className='text-orange-700'>{appointment?.data.date}</span> at <span className='text-orange-700'>{appointment.data.slot}</span></p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">please pay: $ {appointment?.data.price}</button>
                    </div>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl mx-auto bg-base-100">
                <div class="card-body">

                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>

                </div>
            </div>
        </div>

    );
};

export default Payment;