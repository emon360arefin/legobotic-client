import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Authentication/AuthProvider';

const ToyCardPlane = (props) => {
    const { toyName, toyId, subCategory, rating, quantity, price, picture, description, _id } = props.plane;

    const notify = () => toast("To View Detail First Login");

    const { user } = useContext(AuthContext)
    return (
        <div className='bg-slate-50 rounded-lg overflow-hidden border border-slate-200 mt-4 md:mt-0 relative'>

            <div className='overflow-hidden h-60 '>
                <img src={picture} alt="" />
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
            <Link onClick={notify} to={`/toy/${_id}`} className='py-2 bg-[#f01e25] hover:bg-[#d20209] transition-all ease-in-out duration-300 absolute text-white bottom-0 w-full text-center '>
                <button>View Details</button>
            </Link>

            {
                !user && <ToastContainer />
            }
        </div>
    );
};

export default ToyCardPlane;