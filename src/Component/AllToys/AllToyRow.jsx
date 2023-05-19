import React from 'react';
import { Link } from 'react-router-dom';

const AllToyRow = (props) => {

    const {picture, _id, toyName, sellername, selleremail, subCategory, price, rating, quantity, description} = props.toy;
    return (
        <tr>
            <td></td>
            <td className='text-lg font-semibold text-slate-700'>{sellername}</td>
            <td>
                <h2 className='text-lg font-semibold text-slate-700 mb-2'>{toyName}</h2>
                <h2 className='px-4 py-px rounded border border-slate-300 inline'>{subCategory}</h2>
            </td>
            <td>
                <h2 className='text-lg font-semibold text-slate-700 mb-2'>${price} / per unit</h2>
                <h2 className=''>In Stock: {quantity}</h2>
            </td>
            <td>
                <Link  to={`/toy/${_id}`}>
                    <button className='px-6 py-1 rounded text-white bg-[#D31217] '>View Details</button>
                </Link>
            </td>
        </tr>
    );
};

export default AllToyRow;