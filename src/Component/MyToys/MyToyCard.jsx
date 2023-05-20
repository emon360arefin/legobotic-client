import React from 'react';
import { Link } from 'react-router-dom';

const MyToyCard = (props) => {

    const { toyName, toyId, selleremail, sellername, subCategory, rating, quantity, price, picture, description, _id } = props.my;

    return (
        <tr>
            {/* <td></td> */}
            <td className='text-lg font-semibold text-slate-700 px-0'>
                <div className='p-1 bg-slate-200 rounded-lg'>
                    <img className='rounded-md' src={picture} alt="" />
                </div>
            </td>

            <td>
                <h2 className='text-lg font-semibold text-slate-700 mb-2'>{toyName}</h2>
                <h2 className='text-lg font-semibold text-slate-700 mb-2'>Rating: {rating}</h2>
                <h2 className='px-4 py-px rounded border border-slate-300 inline'>{subCategory}</h2>

            </td>

            <td>
                <h2 className='text-lg font-semibold text-slate-700 mb-2'>${price} / per unit</h2>
                <h2 className=''>In Stock: {quantity}</h2>
            </td>

            <td>
                <div className='py-2 px-4 overflow-auto  rounded-lg bg-slate-50 w-full h-32'>
                    <h2 className='text-base text-slate-700 mb-2 whitespace-normal'>{description}</h2>
                </div>

            </td>

            <td>
                <Link to={`/toy/${_id}`}>
                    <button className='px-6 py-1 rounded text-white bg-[#D31217] '>View Details</button>
                </Link>
            </td>

        </tr>
    );
};

export default MyToyCard;