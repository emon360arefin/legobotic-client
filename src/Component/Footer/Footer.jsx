import React from 'react';

const Footer = () => {
    return (
        <div className='bg-slate-100 py-16'>
            <div className='max-w-7xl mx-auto px-2'>
                <div className='  grid md:grid-cols-6 grid-col-1  gap-6'>
                    <div className='col-span-2 pr-6 pl-12 md:pl-0'>
                        <img src="/logo.png" className='md:h-12 h-12' alt="" />
                        <p className='text-slate-500 my-6'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                        <div className='flex gap-4'>
                            <div className='bg-white rounded-full w-10 h-10 p-2'>
                                <button><img className=' ' src="/social1.png" alt="" /></button>
                            </div>
                            <div className='bg-white rounded-full w-10 h-10 p-2'>
                                <button><img className=' ' src="/social2.png" alt="" /></button>
                            </div>
                            <div className='bg-white rounded-full w-10 h-10 p-2'>
                                <button><img className=' ' src="/social3.png" alt="" /></button>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-1 pl-12 md:pl-0'>
                        <h2 className='text-slate-600 text-lg font-semibold'>Company</h2>
                        <div className='flex flex-col items-start gap-3 mt-6'>
                            <button className='text-slate-500 font-semibold  text-sm'>About Us</button>
                            <button className='text-slate-500 font-semibold text-sm'>About Us</button>
                            <button className='text-slate-500 font-semibold text-sm'>About Us</button>
                            <button className='text-slate-500 font-semibold text-sm'>About Us</button>
                        </div>

                    </div>
                    <div className='col-span-1 pl-12 md:pl-0'>
                        <h2 className='text-slate-600 text-lg font-semibold'>Company</h2>
                        <div className='flex flex-col items-start gap-3 mt-6'>
                            <button className='text-slate-500 font-semibold  text-sm'>About Us</button>
                            <button className='text-slate-500 font-semibold text-sm'>About Us</button>
                            <button className='text-slate-500 font-semibold text-sm'>About Us</button>
                            <button className='text-slate-500 font-semibold text-sm'>About Us</button>
                        </div>

                    </div><div className='col-span-1 pl-12 md:pl-0'>
                        <h2 className='text-slate-600 text-lg font-semibold'>Company</h2>
                        <div className='flex flex-col items-start gap-3 mt-6'>
                            <button className='text-slate-500 font-semibold  text-sm'>About Us</button>
                            <button className='text-slate-500 font-semibold text-sm'>About Us</button>
                            <button className='text-slate-500 font-semibold text-sm'>About Us</button>
                            <button className='text-slate-500 font-semibold text-sm'>About Us</button>
                        </div>

                    </div><div className='col-span-1 pl-12 md:pl-0'>
                        <h2 className='text-slate-600 text-lg font-semibold'>Company</h2>
                        <div className='flex flex-col items-start gap-3 mt-6'>
                            <button className='text-slate-500 font-semibold  text-sm'>About Us</button>
                            <button className='text-slate-500 font-semibold text-sm'>About Us</button>
                            <button className='text-slate-500 font-semibold text-sm'>About Us</button>
                            <button className='text-slate-500 font-semibold text-sm'>About Us</button>
                        </div>

                    </div>


                </div>
                <p className='text-center text-slate-400 text-sm pt-8 mt-6 border-t border-slate-300'>@2023 Emon Arefin. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;