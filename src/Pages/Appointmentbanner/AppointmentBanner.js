import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import doctorChair from '../../assets/images/chair.png'

const AppointmentBanner = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={doctorChair} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <DayPicker mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                    <p>You picked {format(date, 'PP')}.</p>
                </div>

            </div>

        </div>

    );
};

export default AppointmentBanner;