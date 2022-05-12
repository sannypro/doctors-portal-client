import React from 'react';

const AppointmentService = ({ service, setTreatment }) => {
    const { name, slots } = service;

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-xl font-bold text-secondary">{name}</h2>
                <p>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>Try another date.</span>
                }</p>
                <p>{slots.length}{slots.length > 1 ? 'space' : 'spaces'}  Available</p>
                <div className="card-actions justify-center">

                    <label onClick={() => setTreatment(service)} disabled={slots.length === 0} htmlFor="booking-modal" className=" modal-button btn btn-secondary text-white uppercase">Book Appointment</label>
                </div>
            </div>
        </div >
    );
};

export default AppointmentService;