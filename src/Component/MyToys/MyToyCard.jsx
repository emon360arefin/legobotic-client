import React from 'react';
import { Link } from 'react-router-dom';
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Swal from 'sweetalert2';


const MyToyCard = (props) => {

    const { toyName, toyId, selleremail, sellername, subCategory, rating, quantity, price, picture, description, _id } = props.my;
    const myToys = props.myToys;
    const setMyToys = props.setMyToys;

    const handleDelete = (id) => {
        console.log(id);

        Swal.fire({
            title: 'Are You Sure Want To Delete This Item ? ',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://toy-server.vercel.app/toy/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                            
                            const rest = myToys.filter(toy => toy._id !== _id)
                            setMyToys(rest)
                        }
                    })
            }
        })
    }


    return (
        <tr>
            <td></td>
            <td className='text-lg font-semibold text-slate-700 px-0'>
                <div className='p-1 bg-slate-200 rounded-lg'>
                    <img className='rounded-md' src={picture} alt="" />
                </div>
            </td>

            <td>
                <h2 className='text-lg font-semibold text-slate-700'>{toyName}</h2>
                <h2 className='text-lg font-semibold text-slate-700 my-1 md:my-2'>Rating: {rating}</h2>
                <h2 className='px-4 py-px rounded border border-slate-300 inline'>{subCategory}</h2>

            </td>

            <td className=''>
                <h2 className='text-lg font-semibold text-slate-700 mb-2'>${price} / per unit</h2>
                <h2 className=''>In Stock: {quantity}</h2>
            </td>

            <td>
                <div className='py-2 px-4 overflow-auto  rounded-lg bg-slate-50 w-60 md:w-full h-32'>
                    <h2 className='text-base text-slate-700 mb-2 whitespace-normal'>{description}</h2>
                </div>

            </td>

            <td className='pr-6'>
                <Link to={`/toy/${_id}`}>
                    <button className='px-6 py-1 rounded w-full text-white bg-[#D31217] '>View Details</button>
                </Link>
                <div className='flex justify-between mt-8'>
                    <button> <BiEdit className='text-3xl text-slate-600' title='Update Item' /> </button>

                    <Link onClick={() => handleDelete(_id)}>
                        <button> <RiDeleteBin5Fill className='text-3xl text-slate-600' title='Delete Item' /> </button>
                    </Link>
                </div>
            </td>

        </tr>
    );
};

export default MyToyCard;