import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';

const MyAppointment = () => {
    const [user] = useAuthState(auth)
    const [appointment, setAppointment] = useState([]);
    useEffect(() => {
        if (user) {
            axios.get(`http://localhost:5000/dashboard?patientEmail=${user.email}`)
                .then(response => setAppointment(response.data))
        }
    }, [user])
    return (
        <div>
            <h2>My appointments {appointment.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointment.map((a, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{a.patientName}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                                <td>{a.treatment}</td>
                            </tr>)
                        }
                        <tr>

                        </tr>


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;