import React from 'react';

const ImageCom = (props) => {
    const { picture } = props.toy;
    return (
        <div className='w-full'>
            <img className='-mx-[450px] md:-mx-80' src={picture} alt="" />

        </div>
    );
};

export default ImageCom;