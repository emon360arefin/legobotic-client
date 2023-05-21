import React from 'react';

const ExtraOneCard = (props) => {

    const { sellerId, sellername, age, country, noOnlineShop, description, photo } = props.seller

    return (
        <div className='py-4 px-6 rounded-lg bg-slate-100 '>
            <div className='flex gap-6'>
                <img className='rounded-full border-2 border-slate-300 w-1/4 h-1/4' src={photo} alt="" />
                <div>
                    <h2 className='text-xl font-semibold'>Name: {sellername}</h2>
                    <h2>Age: {age}</h2>
                    <h2>Country: {country}</h2>
                    <h2>Number of Online Shop : {noOnlineShop}</h2>
                </div>
            </div>
            <div className='mt-4 p-4 rounded bg-white'>
                {description }
            </div>
        </div>
    );
};

export default ExtraOneCard;