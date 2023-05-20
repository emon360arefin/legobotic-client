import React, { useContext, useDebugValue, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider';
import Swal from 'sweetalert2';
import { AiOutlineArrowUp } from "react-icons/ai";

const UpdateMyToy = () => {

    const { id } = useParams();

    const [toy, setToy] = useState([])

    useEffect(() => {
        fetch(`https://toy-server.vercel.app/toy/${id}`)
            .then(res => res.json())
            .then(data => setToy(data))
    }, [id])

    console.log(toy);

    const { user } = useContext(AuthContext);

    const handleUpdateForm = (event) => {
        event.preventDefault();

        const form = event.target;


        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;


        const UpdatedToy = { price, quantity, description };

        console.log(UpdatedToy);

        fetch('https://toy-server.vercel.app/toys', {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(UpdatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }




    return (
        <div className='py-8 md:py-16 bg-white'>
            <div className='max-w-7xl mx-auto px-2 '>

                <div className='max-w-7xl mx-auto px-2'>
                    <h2 className={`text-3xl text-center md:text-4xl font-bold text-[#D7352E] leading-normal `}>Update Your Existing Product</h2>
                    <h2 className='text-lg md:text-xl text-center text-slate-600 my-4 md:my-4 leading-normal'>"Update Your Product: Enhance, modify, and refine existing offerings to meet changing market demands and customer preferences."</h2>
                </div>

                <div className='flex flex-col-reverse justify-center md:flex-row gap-8 mt-12 '>
                    <div className='w-full md:w-3/5 pr-0 md:pr-20'>
                        <form onSubmit={handleUpdateForm} className="p-6 shadow rounded-xl flex flex-col gap-4">



                            <div className='flex gap-6'>

                                <img className='rounded-lg w-1/2' src={toy.picture} alt="" />

                                <div className='w-1/2 overflow-hidden'>
                                    <h2 className='text-3xl font-semibold text-slate-600 whitespace-normal mb-4'>{toy.toyName}</h2>
                                    <h2 className='px-4 py-1 border text-slate-600 bg-red-100 rounded border-slate-400 inline '>{toy.subCategory}</h2>
                                </div>
                            </div>

                            <div className='flex'>
                                <h2 className=' text-xl text-[#2077BC] font-semibold my-2 flex gap-4'>You Are Updating The Toy Shown Above <span className='mt-1'> <AiOutlineArrowUp /> </span> </h2>
                            </div>

                            <div className='flex flex-col md:flex-row justify-between gap-6'>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name='price' placeholder="Enter Price" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Available Quantity</span>
                                    </label>
                                    <input type="text" name='quantity' placeholder="Enter Available quantity" className="input input-bordered" required />
                                </div>
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea name='description' placeholder="Enter Description" className="rounded-lg h-32 border-slate-300 input-bordered" required />
                            </div>




                            <div className="form-control mt-4">
                                <button className="bg-[#EB1651] text-white text-xl py-2 px-auto rounded-md">Update The Toy</button>
                            </div>

                        </form>
                    </div>

                   
                </div>
            </div>

        </div>
    );
};

export default UpdateMyToy;