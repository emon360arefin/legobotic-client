import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ToyDetail = () => {
    const { id } = useParams();
    const [singleToy, setSingleToy] = useState({});

    useEffect(() => {
        fetch(`https://toy-server.vercel.app/toy/${id}`)
            .then(res => res.json())
            .then(data => setSingleToy(data))
    }, []);

    console.log("single");
    console.log(singleToy);
    console.log("toy");

    const { toyName, toyId, selleremail, sellername, subCategory, rating, quantity, price, picture, description, _id } = singleToy;


    return (
        <div className='bg-[#FFFAFA] py-8 md:py-16 ' >
            <div className='max-w-7xl mx-auto px-2'>
                <h2 className='text-4xl text-[#E71C30] font-semibold text-center'>Toy Details</h2>


                <div className='mt-6'>
                    <div className='shadow rounded-xl overflow-hidden flex flex-col md:flex-row'>
                        <div className='w-full md:w-1/2'>
                            <img className='' src={picture} alt="" />
                        </div>
                        <div className='p-6 flex flex-col gap-4 w-full md:w-1/2'>
                            <h2 className='text-2xl md:text-3xl font-bold text-slate-700'>{toyName}</h2>
                            <div className='flex justify-between'>
                                <h2 className='text-xl text-slate-600'> <span className='font-bold text-slate-600'>Price:</span> ${price}</h2>
                                <h2 className='text-xl text-slate-600 '> <span className='font-bold text-slate-600'>Rating:</span> {rating}</h2>
                            </div>

                            <div className='flex justify-between'>
                                <h2 className='text-xl text-slate-600'><span className='font-bold text-slate-600'>In Stock:</span> {quantity}</h2>
                                <h2 className='border font-bold text-xl bg-red-100 px-3 py-px text-slate-600'>{subCategory}</h2>
                            </div>

                            {
                                sellername &&

                                <div className='flex justify-between'>
                                    <h2 className='text-lg text-slate-600'> <span className='font-bold text-slate-600'>Seller: </span>{sellername}</h2>
                                    <h2 className='text-lg text-slate-600'> <span className='font-bold text-slate-600'>Seller Email:</span> {selleremail}</h2>
                                </div>
                            }

                            <div className='p-4 border border-slate-200 h-auto md:h-44 rounded bg-white overflow-auto'>
                                <h2 className='text-lg text-slate-600'>{description}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetail;