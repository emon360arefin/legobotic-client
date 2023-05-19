import React from 'react';

const ImageCom = (props) => {
    const { picture } = props.toy;
    return (
        <div className='w-full '>
            <img className=' h-80 rounded-lg mx-4 ' src={picture} alt="" />

        </div>
    );
};

export default ImageCom;