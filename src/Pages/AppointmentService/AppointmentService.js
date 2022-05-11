import React from 'react';

const AppointmentService = ({ service, setTreatment }) => {
    const { name, slots } = service;
    console.log(slots);
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-secondary">{name}</h2>
                <p>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>Try another date.</span>
                }</p>
                <p>{slots.length}{slots.length > 1 ? 'space' : 'spaces'}  Available</p>
                <div class="card-actions justify-center">

                    <label onClick={() => setTreatment(service)} disabled={slots.length === 0} for="booking-modal" class="btn modal-button btn btn-secondary text-white uppercase">Book Appointment</label>
                </div>
            </div>
        </div >
    );
};

export default AppointmentService;