import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider';
import Swal from 'sweetalert2';

const AddToy = () => {
    const { user } = useContext(AuthContext);

    const handleAddForm = (event) => {
        event.preventDefault();

        const form = event.target;

        const picture = form.toyurl.value;
        const toyName = form.toyname.value;
        let sellername = form.sellername.value;
        let selleremail = form.selleremail.value;
        const subCategory = form.subcategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        if (sellername === "") {
            sellername = user.displayName;
        }

        if (selleremail === "") {
            selleremail = user.email;
        }

        const toyForm = { picture, toyName, sellername, selleremail, subCategory, price, rating, quantity, description };

        console.log(toyForm);

        fetch('https://toy-server.vercel.app/toys', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(toyForm)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Added Successfully',
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
                    <h2 className={`text-3xl text-center md:text-4xl font-bold text-[#D7352E] leading-normal `}>Contribute By Adding</h2>
                    <h2 className='text-lg md:text-xl text-center text-slate-600 my-4 md:my-4 leading-normal'>Sellers can contribute their own toy products to this platform. It allows sellers to provide details such as toy photo URL, toy name, seller information, subcategory, price, rating, quantity, and description. By filling out the form and submitting it, users can add their toy products to the platform for others to explore and potentially purchase.</h2>
                </div>

                <div className='flex flex-col-reverse md:flex-row gap-8 mt-12 '>
                    <div className='w-full md:w-3/5 pr-0 md:pr-20'>
                        <form onSubmit={handleAddForm} className="p-6 shadow rounded-xl flex flex-col gap-4">

                            <div className='flex flex-col md:flex-row justify-between gap-6'>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Toy Photo URL</span>
                                    </label>
                                    <input type="text" name='toyurl' placeholder="Enter Toy Photo URL" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Toy Name</span>
                                    </label>
                                    <input type="text" name='toyname' placeholder="Enter Toy Name" className="input input-bordered" required />
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row justify-between gap-6'>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Seller Name</span>
                                    </label>
                                    <input type="text" name='sellername' placeholder={user && user.displayName} className="input input-bordered" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Seller Email</span>
                                    </label>
                                    <input type="email" name='selleremail' placeholder={user && user.email} className="input input-bordered" />
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row justify-between gap-6'>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Toy's Sub Category</span>
                                    </label>
                                    <select name="subcategory" className="input input-bordered">
                                        <option value="Car">Car</option>
                                        <option value="Boat">Boat</option>
                                        <option value="Plane">Plane</option>
                                    </select>
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name='price' placeholder="Enter Price" className="input input-bordered" required />
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row justify-between gap-6'>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Toy Rating</span>
                                    </label>
                                    <input type="number" max={5} name='rating' placeholder="Enter Toy Rating" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Available quantity</span>
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
                                <button className="bg-[#EB1651] text-white text-xl py-2 px-auto rounded-md">Add The Toy</button>
                            </div>

                        </form>
                    </div>

                    <div className='w-full md:w-2/5'>
                        <img src="/add.jpg" alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddToy;