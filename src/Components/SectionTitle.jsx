import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='w-fit mx-auto my-6 text-center'>
            <p className='text-[#D99904] '>---{subHeading}---</p>
            <h2 className='text-5xl border-y-2 py-2 mt-2  px-8 '>{heading}</h2>
            
        </div>
    );
};

export default SectionTitle;