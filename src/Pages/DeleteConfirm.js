import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirm = ({ deletingDoctor, refetch }) => {
    const handleDelete = (email, name) => {
        axios.delete(`https://lit-reaches-57483.herokuapp.com/doctor/${email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(response => {
            if (response.data.deletedCount > 0) {
                toast.success(`Doctor ${name} is Deleted`)
                refetch()
            }
        })
    }
    return (

        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete {deletingDoctor.name}</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete(deletingDoctor.email, deletingDoctor.name)} class="btn  btn-error">Delete</button>
                        <label for="delete-confirm-modal" class="btn">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirm;