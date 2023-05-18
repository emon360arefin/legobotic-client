import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <img className=' w-full md:w-1/2' src="/notfound.jpg" alt="" />
            <Link to='/'>
                <button className='px-4 py-1 rounded text-white mt-16 bg-[#df181b]'>GO BACK HOME</button>
            </Link>
        </div>
    );
};

export default NotFound;