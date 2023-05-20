import React from 'react';
import { Link } from 'react-router-dom';

const AllToyRow = (props) => {

    const { picture, _id, toyName, sellername, selleremail, subCategory, price, rating, quantity, description } = props.toy;
    return (
        <tr>
            <td></td>
            <td >
                <div className='overflow-auto'>
                    <h2 className='text-lg font-semibold text-slate-700 whitespace-normal'>
                        {sellername}
                    </h2>
                </div>
            </td>
            <td className='text-lg font-semibold text-slate-700 px-0'>
                <div className='p-1 bg-slate-200 rounded-lg mr-0 md:mr-16'>
                    <img className='rounded-md' src={picture} alt="" />
                </div>
            </td>
            <td>
                <h2 className='text-lg font-semibold text-slate-700 mb-2 whitespace-normal'>{toyName}</h2>
                <h2 className='px-4 py-px rounded border border-slate-300 inline'>{subCategory}</h2>
            </td>
            <td>
                <h2 className='text-lg font-semibold text-slate-700 mb-2'>${price} / per unit</h2>
                <h2 className=''>In Stock: {quantity}</h2>
            </td>
            <td>
                <Link to={`/toy/${_id}`}>
                    <button className='px-6 py-1 rounded text-white bg-[#D31217] '>View Details</button>
                </Link>
            </td>
        </tr>
    );
};

export default AllToyRow;