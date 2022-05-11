import React, { useState } from 'react';
import AppointmentBanner from '../Appointmentbanner/AppointmentBanner';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';


const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className='px-12'>
            <AppointmentBanner date={date} setDate={setDate} />
            <AvailableAppointments date={date} />

        </div>
    );
};

export default Appointment;