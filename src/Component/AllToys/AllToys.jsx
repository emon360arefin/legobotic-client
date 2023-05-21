import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToyRow from './AllToyRow';
import useTitle from '../Hooks/useTitle';

const AllToys = () => {

    // const allToys = useLoaderData();

    useTitle("All Toys")

    const [allToys, setAllToys] = useState([])
    useEffect(() => {
        fetch(`https://toy-server.vercel.app/limittoys`)
            .then(res => res.json())
            .then(data => {
                setAllToys(data);
                setFilteredToys(data)
            })
    }, [])

    // const userToys = allToys.filter(toy => toy.selleremail)

    // console.log(userToys);


    // Search Box
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredToys, setFilteredToys] = useState(allToys);

    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchQuery(query);

        const filtered = allToys.filter((toy) =>
            toy.toyName.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredToys(filtered);
    };

    return (
        <div className='py-8 md:py-16 bg-white'>
            <div className='max-w-7xl mx-auto px-2 '>



                <div className='max-w-7xl mx-auto px-2'>
                    <h2 className={`text-3xl text-center md:text-4xl font-bold text-[#D7352E] leading-normal `}>All Toys</h2>
                    <h2 className='text-lg md:text-xl text-center text-slate-600 my-4 md:my-4 leading-normal'>"All Toys" is a section that displays a comprehensive collection of available toys on the platform. Users can browse through various categories and subcategories to explore a wide range of toys. The section provides a centralized view of all toys, allowing users to easily search, filter, and view details of each toy. Whether looking for specific toys or simply browsing for inspiration, the "All Toys" section offers a convenient and engaging experience for toy enthusiasts.</h2>
                </div>
                <div>
                    <input
                        type="text"
                        className='rounded border border-slate-600 w-full md:w-1/6  mt-12'
                        placeholder="Search By Toy Name"
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                </div>

                <div className='flex flex-col-reverse md:flex-row gap-8 mt-4 '>
                    <div className=' w-full'>
                        <div className="overflow-x-auto shadow rounded-lg">
                            <table className="table w-full ">
                                {/* head */}
                                <thead className=''>
                                    <tr className=''>

                                        <th className='w-0'></th>
                                        <th className='w-2/12 text-base'>Seller Name</th>
                                        <th className='w-3/12 text-base'>Toy Image</th>
                                        <th className='w-3/12 text-base'>Toy Name (Sub Category)</th>
                                        <th className='w-2/12 text-base'>Price (Quantity)</th>
                                        <th className='w-2/12 text-base'>Toy Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        filteredToys.map(toy => <AllToyRow key={toy._id} toy={toy}></AllToyRow>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllToys;