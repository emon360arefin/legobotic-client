import React from 'react';

const ToyDetailCard = (props) => {
    const { toyName, toyId, subCategory, rating, quantity, price, picture, description, _id } = props.toy;

    return (
        <div className='py-16'>
            <div className='shadow rounded-xl overflow-hidden flex flex-col md:flex-row'>
                <img className='w-full md:w-1/2' src={picture} alt="" />
                <div className='p-6 flex flex-col gap-4'>
                    <h2 className='text-4xl font-bold text-slate-600'>{toyName}</h2>
                    <div className='flex justify-between'>
                        <h2 className='text-xl'> <span className='font-bold '>Price:</span> ${price}</h2>
                        <h2 className='text-xl'> <span className='font-bold'>Rating:</span> {rating}</h2>
                    </div>
                    <div className='flex justify-between'>
                        <h2 className='text-xl'><span className='font-bold'>In Stock:</span> {quantity}</h2>
                        <h2 className='border font-bold text-xl bg-red-100 px-3 py-px'>{subCategory}</h2>

                    </div>
                    <h2 className='text-lg p-4 rounded bg-white'>{description}</h2>
                </div>
            </div>
        </div>
    );
};

export default ToyDetailCard;