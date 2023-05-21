import React, { useEffect, useState } from 'react';
import ExtraOneCard from './ExtraOneCard';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const ExtraOne = () => {


    const [sellers, setSellers] = useState([]);

    useEffect(() => {
        fetch('https://toy-server.vercel.app/sellers')
            .then(res => res.json())
            .then(data => setSellers(data))
    }, []);

    console.log(sellers);

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [sellers]);

    return (
        <div className='bg-white py-8 md:py-16 z-10 overflow-hidden'>
            <div className='max-w-7xl mx-auto px-2'>

                <div data-aos="fade-up" data-aos-duration="1500">

                <div>
                    <h2 className={`text-3xl text-center md:text-4xl font-bold text-[#D7352E] leading-normal `}>Join Our Community</h2>
                    <h2 className='text-lg md:text-xl text-center text-slate-600 my-8 md:my-10 leading-normal'>Our community is a vibrant space where LEGO enthusiasts come together to share their love for building, creativity, and imagination. Engage with fellow builders, exchange ideas, showcase your creations, and participate in exciting challenges and events. Whether you're a novice or a seasoned builder, our inclusive community welcomes all ages and skill levels. Together, let's inspire, learn, and celebrate the joy of LEGO building!</h2>
                </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {
                        sellers.map(seller => <ExtraOneCard key={seller._id} seller={seller}></ExtraOneCard>)
                    }
                </div>




                <div className='z-10' data-aos="fade-up" data-aos-duration="1500">

                    <div className='mt-12 flex justify-center'>
                        <Link to='/login' className='py-2 md:px-8 px-6 text-lg text-center  border bg-gradient-to-r from-[#EA1E34] to-[#D01012] text-white rounded'>Join The Community</Link>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ExtraOne;