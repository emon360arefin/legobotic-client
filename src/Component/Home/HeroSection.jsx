import React from 'react';

const HeroSection = () => {
    return (
        <div>
            <div className="bg-[#fffafa] pb-1 md:pb-8 rounded-b-2xl  mx-2 md:mx-4 pt-1 md:pt-40 bg-[url('/cover2.png')] bg-cover bg-center bg-no-repeat ">
                <div className="max-w-7xl mx-auto px-2 ">
                    <div className='flex-col justify-end items-end pt-80'>
                        <h2 className={`text-4xl text-center md:text-6xl font-bold mt-32 leading-snug text-red-100`}>Unlock Your Imagination with LEGO Delight! </h2>
                        <h2 className='text-xl md:text-xl text-center text-red-200 my-10 leading-snug'>Ignite the power of imagination with LEGO's delightful bricks. Experience endless possibilities as you build and create, unleashing your creativity to bring your wildest dreams to life. Let the joy and wonder of LEGO ignite your imagination today!</h2>
                    </div>
                </div>
            </div>
        </div>




    );
};

export default HeroSection;