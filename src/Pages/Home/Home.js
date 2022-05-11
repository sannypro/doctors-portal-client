import React from 'react';
import Info from '../Info/Info';
import InputForm from '../InputForm/InputForm';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <div className='px-12'>
                <Banner></Banner>
                <Info></Info>
                <Services></Services>
                <MakeAppointment></MakeAppointment>
                <Testimonials></Testimonials>

            </div>
            <InputForm></InputForm>
        </div>
    );
};

export default Home;