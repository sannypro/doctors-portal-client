import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from './Shared/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { data: services, isLoading } = useQuery('services', () => fetch('https://lit-reaches-57483.herokuapp.com/service').then(res => res.json()))
    const imgStorage = 'af2c0210144242efb0288fa2cd0437b7'
    const onSubmit = async data => {
        console.log(data);
        const img = data?.img[0];
        const formData = new FormData();
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorage}`;
        fetch(url, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        speciality: data.speciality,
                        img: img
                    }
                    axios.post('https://lit-reaches-57483.herokuapp.com/doctors', doctor, {
                        headers: {
                            "authorization": `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    }).then(response => {
                        if (response.status === 200) {
                            toast.success('Added Doctor')
                        }
                        else {
                            toast.error('Failed to Add Doctor')
                        }
                    })
                }

            })


    };
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div >
            <h2 className='text-2xl '>Add a New Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Name</span>

                    </label>
                    <input {...register("name", {
                        required: {
                            value: true,
                            message: "Name is Required"
                        },

                    })} type="text" placeholder="YOUR NAME" class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                        {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}



                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Email</span>

                    </label>
                    <input {...register("email", {
                        required: {
                            value: true,
                            message: "Email is Required"
                        },
                        pattern: {
                            value: /[A-Za-z]{3}/,
                            message: 'error message'
                        }
                    })} type="email" placeholder="YOUR EMAIL" class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                        {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}


                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">speciality</span>

                    </label>
                    <select {...register('speciality')} class="select select-bordered w-full max-w-xs mb-5">
                        {
                            services.map(service => <option value={service.name} key={service._id}>{service.name}</option>)
                        }
                    </select>

                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Photo</span>

                    </label>
                    <input {...register("img", {
                        required: {
                            value: true,
                            message: "image is Required"
                        },

                    })} type="file" placeholder="Image" class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                        {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}



                    </label>
                </div>
                <input className='btn text-white w-full max-w-xs' type="submit" value='Add' />
            </form>
        </div>
    );
};

export default AddDoctor;