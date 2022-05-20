import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import DeleteConfirm from './DeleteConfirm';
import Loading from './Shared/Loading';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('https://lit-reaches-57483.herokuapp.com/doctors', {
        method: 'GET',
        headers: {
            "authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    console.log(doctors);
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className="text-2xl">Manage Doctors: {doctors?.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>speciality</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <tr key={doctor._id}>
                                <th>{index + 1}</th>
                                <td><div class="avatar">
                                    <div class="w-16 rounded">
                                        <img src={doctor.img} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div></td>
                                <td>{doctor.name}</td>
                                <td>{doctor.speciality}</td>
                                <td><label onClick={() => setDeletingDoctor(doctor)} for="delete-confirm-modal" class="btn modal-button">delete</label></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <DeleteConfirm deletingDoctor={deletingDoctor} setDeletingDoctor={setDeletingDoctor} refetch={refetch}></DeleteConfirm>
            }
        </div>
    );
};

export default ManageDoctors;