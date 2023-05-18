import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import ImageCom from './ImageCom';

const SectionOne = () => {

    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch("https://toy-server.vercel.app/toys")
            .then(res => res.json())
            .then(data => setToys(data))

    }, [])

    const images = [];
    toys.map(toy => images.push(toy.picture))
    return (
        <div className='py-16'>
            <div className=''>
                <div className='max-w-7xl mx-auto px-2'>
                    <h2 className={`text-3xl text-center md:text-4xl font-bold text-[#D7352E] leading-normal `}>Products Gallery.</h2>
                    <h2 className='text-lg md:text-xl text-center text-slate-600 my-8 md:my-10 leading-normal'>In this section on our website showcases a wide range of Lego products that we offer for sale. Explore our visually captivating gallery featuring an extensive collection of Lego sets, including iconic themes, popular characters, and exciting builds. From classic sets to the latest releases, our Products Gallery provides a captivating visual experience, allowing you to browse and discover the perfect Lego products to fuel your creativity and imagination. Get inspired by the endless possibilities and find your next Lego masterpiece in our Products Gallery.</h2>
                </div>
                {
                    toys ?
                        <Marquee speed={100} autoFill={true}>


                            {toys.map(toy => <ImageCom key={toy.id} toy={toy}></ImageCom>)}
                        </Marquee> :
                        <div className='min-h-screen flex flex-col items-center justify-center absolute top-0 left-0 right-0 bottom-0 z-20 backdrop-blur-lg bg-[#ffffffe4]'> <span className='text-xl mb-2'>Loading ...</span> <progress className="progress  mx-auto  w-1/3">  </progress> </div>
                }
            </div>
        </div>
    );
};

export default SectionOne;