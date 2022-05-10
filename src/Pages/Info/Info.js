import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 text-white gap-5  '>
            <InfoCard bgColor='white font-bold bg-gradient-to-r from-secondary to-primary' title={'Opening Hours'} img={clock}></InfoCard>
            <InfoCard bgColor='bg-accent' title={'Visit our location'} img={marker}></InfoCard>
            <InfoCard bgColor="white font-bold bg-gradient-to-r from-secondary to-primary" title="Contact us now " img={phone}></InfoCard>
        </div>
    );
};

export default Info;