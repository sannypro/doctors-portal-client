import React from 'react';
import appointment from '../../assets/images/appointment.png'

const InputForm = () => {
    return (
        <div style={{ background: `url(${appointment})` }} >
            <div className='flex justify-center py-16 px-96'>
                <div>
                    <div>
                        <h4 className='text-3xl text-secondary'> Contact us</h4>
                        <h1 className='text-4xl '>Stay connected with us</h1>
                    </div>



                    <div className='text-center flex-col justify-ceneter my-10'>
                        <input type="text" placeholder="Email" class="input block input-bordered my-5 h-12 input-md w-full max-w-lg" />
                        <input type="text" placeholder="Subject" class="input h-12 block input-bordered my-5  input-md w-full max-w-lg" />

                        <textarea type="text" placeholder="Type here" class="textarea block  h-32 w-full max-w-lg  my-5  textarea-accent" />
                        <button className="btn btn-primary uppercases my-5  text-white font-bold bg-gradient-to-r from-secondary to-primary ">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InputForm;