import React from 'react';
import { useQuery } from 'react-query';
import Loading from './Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://lit-reaches-57483.herokuapp.com/users', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl '>All users {users?.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>


                        {users?.map((user, index) => <UserRow refetch={refetch} index={index} user={user} key={user._id}></UserRow>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;