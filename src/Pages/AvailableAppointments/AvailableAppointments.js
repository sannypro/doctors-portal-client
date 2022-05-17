import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import AppointmentService from '../AppointmentService/AppointmentService';
import BookingModal from '../AppointmentService/BookingModal';
import Loading from '../Shared/Loading';


const AvailableAppointments = ({ date }) => {

    const [treatment, setTreatment] = useState(null)
    const formattedDate = format(date, "PP");
    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`https://lit-reaches-57483.herokuapp.com/available?date=${formattedDate}`)
        .then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    // useEffect(() => {
    //     fetch(`https://lit-reaches-57483.herokuapp.com/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formattedDate])
    return (
        <div>
            <h1 className='text-xl text-secondary text-center'>Available appointments on {format(date, 'PP')}</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <AppointmentService setTreatment={setTreatment} key={service._id} service={service}></AppointmentService>)
                }
            </div>
            {treatment && <BookingModal refetch={refetch} date={date} treatment={treatment} setTreatment={setTreatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;