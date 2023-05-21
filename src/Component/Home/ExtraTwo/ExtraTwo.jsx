import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const ExtraTwo = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    return (
        <div className='bg-[#FFFAFA] py-8 md:py-16 z-20 overflow-hidden'>
            <div className='max-w-7xl mx-auto px-2'>

                <div data-aos="fade-up" data-aos-duration="1500">

                    <div>
                        <h2 className={`text-3xl text-center md:text-4xl font-bold text-[#D7352E] leading-normal `}>Customer Support</h2>
                        <h2 className='text-xl md:text-2xl font-semibold  text-center text-slate-600 my-8 md:my-10 leading-normal'>We're Here to Help</h2>
                    </div>
                </div>

                {/* <div data-aos="fade-up" data-aos-duration="1500">

                    
                </div> */}

                <div className='flex flex-col md:flex-row gap-12 '>


                    <div className='w-full md:w-1/2'>
                        <div data-aos="fade-right" data-aos-duration="1500">
                            <img className='' src="/customer.png" alt="" />
                        </div>
                    </div>

                    <div className='w-full md:w-1/2 flex flex-col justify-center'>

                        <div data-aos="fade-left" data-aos-duration="1500">
                            <h2 className='text-xl text-slate-700'>
                                At LEGOBOTIC, we value your satisfaction and are dedicated to providing exceptional customer support. Our experienced team is ready to assist you with any inquiries or concerns you may have. From product information and order tracking to troubleshooting and general assistance, we're here to ensure your LEGO experience is smooth and enjoyable.
                            </h2>
                            <h2 className='mt-6 text-lg text-slate-700 '>
                                Browse our comprehensive FAQs for quick answers to common questions, or reach out to our friendly support team for personalized assistance. We strive to provide prompt and reliable support, guiding you every step of the way. Your satisfaction is our top priority, and we're committed to making your LEGO journey a fantastic one. Don't hesitate to contact us – we're here to help you with all your LEGO needs
                            </h2>

                        </div>



                    </div>



                </div>


                <div data-aos="fade-up" data-aos-duration="1500">

                    <div className='mt-12 flex justify-center'>
                        <Link to='/login' className='py-2 md:px-8 px-6 text-lg text-center  border bg-gradient-to-r from-[#EA1E34] to-[#D01012] text-white rounded'>Contact Us</Link>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ExtraTwo;