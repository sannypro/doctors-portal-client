import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section style={{ background: `url(${appointment})` }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-200px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold'>
                    Appointment
                </h3>
                <h2 className='text-3xl text-white'>Exceptional Dental Care, on Your Terms</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quidem veniam, autem eligendi ipsa atque vero deserunt ex, est laborum eaque nemo. Doloribus minus repellat unde praesentium ipsa voluptatibus maxime iste modi, eveniet nam hic delectus in optio voluptatem. Hic?</p>
                <button className="btn btn-primary uppercases text-white font-bold bg-gradient-to-r from-secondary to-primary ">Get Started</button>
            </div>
        </section>
    );
};

export default MakeAppointment;