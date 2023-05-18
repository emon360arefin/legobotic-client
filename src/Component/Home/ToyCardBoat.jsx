import React from 'react';
import { Link } from 'react-router-dom';

const ToyCardBoat = (props) => {

    const { toyName, toyId, subCategory, rating, quantity, price, picture, description } = props.boat;

    return (
        <div className='bg-slate-50 rounded-lg overflow-hidden border border-slate-200 mt-8 relative'>
            <img src={picture} alt="" />
            <div className='p-4 flex flex-col gap-2 mb-12'>
                <h2 className='text-xl font-bold text-slate-600'>{toyName}</h2>
                <div className='flex justify-between'>
                    <h2> <span className='font-semibold'>Price:</span> ${price}</h2>
                    <h2> <span className='font-semibold'>Rating:</span> {rating}</h2>
                </div>

                <div className='flex justify-between'>
                    <h2><span className='font-semibold'>In Stock:</span> {quantity}</h2>
                    <h2 className='border px-3 py-1'>{subCategory}</h2>

                </div>
                <h2>{description}</h2>
            </div>
            <Link className='py-2 bg-[#f01e25] absolute text-white bottom-0 w-full text-center '>
                <button>View Details</button>
            </Link>
        </div>
    );
};

export default ToyCardBoat;