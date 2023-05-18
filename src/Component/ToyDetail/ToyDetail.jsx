import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ToyDetail = () => {
    const { id } = useParams();

    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`https://toy-server.vercel.app/toys`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    const toy = toys.filter(to => to._id == id)
    console.log(toy.picture);

    return (
        <div className='bg-[#FFFAFA] py-16 ' >
            <div className='max-w-7xl mx-auto px-2'>
                {
                    toy.map(to => <img key={to.id} src={to.picture}></img> )
                }
            </div>
        </div>
    );
};

export default ToyDetail;