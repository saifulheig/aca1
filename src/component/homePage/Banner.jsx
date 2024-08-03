import Image from 'next/image';
import React from 'react';
import bannerImg from '../../assets/banner/banner.png'

const Banner = () => {
    return (
        <div className='bg-[#FFF0E7]'>
            <div className=' pb-20 '>
                <div className='lg:flex max-w-screen-xl mx-auto'>
                    <div className='flex-1 pl-14 pt-52   '>
                        <h1 className='text-6xl font-bold text-[#040432] leading-tight'>Learn , Grow & Succeed -<span className='text-[#FD6309]'> Anytime, Anywhere!</span></h1>
                        <p className='  text-justify leading-9 mt-16'>Our transformative learning platform offers diverse opportunities, including Easy Quran Learning along with Renewable Energy Sources and more . Join us on this journey, where innovation meets opportunity, and together, let’s open doors to knowledge and a brighter tomorrow.</p>
                        <div className='flex mt-16 gap-2 md:gap-14'>
                            <button className=" px-3 text-base py-4 font-bold text-white 
                        bg-[#FD6309] hover:bg-[#fd823a]  rounded">START LEARNING</button>
                            <button className="px-3 text-base font-bold py-4 text-[#FD6309] border border-[#FD6309] rounded active:text-[#FD6309] bg-white hover:bg-[#FD6309] hover:text-white">EXPLORE COURSES</button>
                        </div>
                    </div>

                    <div className='flex-1 mt-10 pl-3'>
                        <div className='flex justify-center -mt-10 ml-28'>
                            <Image className="w-[95%]"
                                src={bannerImg}
                                alt="Solar-academy Logo"
                                width={150}
                                height={40}
                                priority
                            />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;