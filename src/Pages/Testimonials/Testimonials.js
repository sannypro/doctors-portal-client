import React from 'react';
import qoute from '../../assets/icons/quote.svg'
import people from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people
        },
        {
            _id: 2,
            name: "Winson Herry",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people2
        },
        {
            _id: 3,
            name: "Winson Herry",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people3
        },
    ]
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div><h4 className="text-xl text-primary font-bold">Testimonials</h4>
                    <h2 className="text-3xl  ">What Our Patients Says</h2>

                </div>
                <div>
                    <img className='w-24 lg:w-48' src={qoute} alt="" />
                </div>
            </div>
            <div >

            </div>
        </section>
    );
};

export default Testimonials;