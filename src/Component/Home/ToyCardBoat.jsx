import React from 'react';
import { Link } from 'react-router-dom';

const ToyCardBoat = (props) => {

    const { toyName, toyId, subCategory, rating, quantity, price, picture, description, _id } = props.boat;

    return (
        <div className='bg-slate-50 rounded-lg overflow-hidden border border-slate-200 mt-4 md:mt-8 relative'>
            <div className='overflow-hidden h-60'>
                <img className='' src={picture} alt="" />
            </div>
            <div className='p-4 flex flex-col gap-2 mb-12'>
                <h2 className='text-xl font-bold text-slate-600'>{toyName}</h2>
                <div className='flex justify-between'>
                    <h2> <span className='font-semibold'>Price:</span> ${price}</h2>
                    <h2> <span className='font-semibold'>Rating:</span> {rating}</h2>
                </div>

                <div className='flex justify-between'>
                    <h2><span className='font-semibold'>In Stock:</span> {quantity}</h2>
                    <h2 className='border bg-red-100 px-3 py-px'>{subCategory}</h2>

                </div>
                <h2>{description}</h2>
            </div>
            <Link to={`/toy/${_id}`} className='py-2 bg-[#f01e25] hover:bg-[#d20209] transition-all ease-in-out duration-300 absolute text-white bottom-0 w-full text-center '>
                <button>View Details</button>
            </Link>
        </div>
    );
};

export default ToyCardBoat;