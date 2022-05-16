import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${user.email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("Failed to make an admin")
                }
                return res.json()
            })
            .then(data => {

                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success(`Successfully made an Admin`)

                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>{user.role !== "admin" && <button class="btn btn-xs" onClick={makeAdmin}>Make Admin</button>}</td>
            <td><button class="btn btn-xs">Remove User</button></td>
            <td>Blue</td>
        </tr>
    );
};

export default UserRow;