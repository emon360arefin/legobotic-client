import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';
import MyToyCard from './MyToyCard';
// import { useLoaderData } from 'react-router-dom';

const MyToys = () => {

    const { user } = useContext(AuthContext);
    // const loadedToys = useLoaderData()

    const [loadedToys, setLoadedToys] = useState([])
    const [myToys, setMyToys] = useState([]);

    useEffect(() => {
        fetch(`https://toy-server.vercel.app/toys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setLoadedToys(data);
            })
    }, [user]);

    useEffect(() => {
        setMyToys(loadedToys);
    }, [loadedToys]);

    console.log(myToys);


    return (
        <div className='bg-white py-6 md:py-16'>
            <div className='max-w-7xl mx-auto px-2 '>

                <div className='max-w-7xl mx-auto px-2'>
                    <h2 className={`text-3xl text-center md:text-4xl font-bold text-[#D7352E] leading-normal `}>See All The Toys You Have Added</h2>
                    <h2 className='text-lg md:text-xl text-center text-slate-600 my-4 md:my-4 leading-normal'>"My Toys" is a dedicated section that allows you to view and manage your personal collection of toys. It provides a comprehensive overview of all the toys you have added, allowing you to easily browse, organize, and keep track of your collection. Whether you're an avid toy collector or simply enjoy keeping tabs on your favorite playthings, this section offers a convenient way to explore and appreciate the toys you've accumulated over time.</h2>
                </div>


                <div className='overflow-x-auto shadow rounded-lg mt-8'>
                    <table className="table w-full ">
                        {/* head */}
                        <thead>
                            <tr>

                                <th className='w-0'></th>
                                <th className='w-2/12 text-base'>Toy Image</th>
                                <th className='w-2/12 text-base'>Toy</th>
                                <th className='w-2/12 text-base'>Price (Quantity)</th>
                                <th className='w-4/12 text-base'>Description</th>
                                <th className='w-2/12 text-base'>Toy Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myToys.map(my => <MyToyCard key={my._id} my={my} myToys={myToys} setMyToys={setMyToys} ></MyToyCard>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToys;