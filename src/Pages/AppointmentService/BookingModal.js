import axios from 'axios';
import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const [user, loading, error] = useAuthState(auth);
    const handleBooking = e => {
        e.preventDefault()
        const slot = e.target.slot.value;
        console.log(slot);
        const formattedDate = format(date, 'PP')
        console.log(formattedDate);
        const booking = {
            treatmentId: treatment._id,
            treatment: treatment.name,
            date: formattedDate,
            slot: slot,
            patientEmail: user.email,
            patientName: user.displayName,
            phone: e.target.number.value
        };
        axios.post('http://localhost:5000/booking', booking)
            .then(response => {
                console.log(response.data.success);
                if (response.data.success) {
                    toast(`appointment is set, ${formattedDate}at ${slot}`)
                }
                else {
                    toast.error(`you alreay have an appointment , ${response?.data?.booking?.date}at ${response?.data?.booking?.slot}`)
                }
                setTreatment(null)
            })


    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-secondary">{treatment.name}</h3>

                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                treatment.slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }

                        </select>
                        <input required name='email' type="email" disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                        <input required type="text" name='name' disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        <input required type="text" name='number' placeholder="Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" className=" btn btn-secondary w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div >
    );
};

export default BookingModal;