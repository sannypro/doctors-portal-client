import React from 'react';


const InfoCard = ({ img, title, bgColor }) => {

    return (
        <div className={` card lg:card-side p-5 shadow-xl ${bgColor} `} >
            <figure><img src={img} alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title">{title}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>

            </div>
        </div >
    );
};

export default InfoCard;