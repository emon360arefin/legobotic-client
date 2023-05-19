import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ToyDetailCard from './ToyDetailCard';

const ToyDetail = () => {
    const { id } = useParams();

    const [toys, setToys] = useState([]);
    const [singleToy, setSingleToy] = useState(null);

    useEffect(() => {
        fetch(`https://toy-server.vercel.app/toy/${id}`)
        .then(res => res.json())
        .then(data => setSingleToy(data))
    },[]);

    console.log("single");
    console.log(singleToy);
    console.log("toy");
    
    useEffect(() => {
        fetch(`https://toy-server.vercel.app/toys`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    const toy = toys.filter(to => to._id == id)
    // console.log(toy.picture);

    return (
        <div className='bg-[#FFFAFA] py-8 md:py-16 ' >
            <div className='max-w-7xl mx-auto px-2'>
                <h2 className='text-4xl text-[#E71C30] font-semibold text-center'>Toy Details</h2>
                {
                    toy.map(to => <ToyDetailCard key={to.id} toy={to}></ToyDetailCard> )
                }
            </div>
        </div>
    );
};

export default ToyDetail;