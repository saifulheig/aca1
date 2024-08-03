import React from 'react';
/// testing 
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div>
             <h3 className='text-center text-orange-600 tracking-wide'>{subHeading}</h3>
            <h1 className='text-center mt-5 text-2xl md:text-[35px] font-bold text-[#040432]'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;