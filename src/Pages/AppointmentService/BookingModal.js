import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const handleBooking = e => {
        e.preventDefault()
        const slot = e.target.slot.value;
        console.log(slot);
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-secondary">{treatment.name}</h3>

                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                treatment.slots.map(slot => <option value={slot}>{slot}</option>)
                            }

                        </select>
                        <input required name='email' type="email" placeholder="Email" class="input input-bordered w-full max-w-xs" />
                        <input required type="text" name='name' placeholder="Name" class="input input-bordered w-full max-w-xs" />
                        <input required type="text" name='number' placeholder="Number" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" class=" btn btn-secondary w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;