import Image from 'next/image';
import React from 'react';
import SectionTitle from '../reuseable/SectionTitle';
import { MdOutlineFacebook } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const ExpertInstructor = () => {
  const data = [
    {
        "id": 1,
        "name": "Saiful Islam",
        "image": '/expert/one.png',
        "linkedin": 'start teaching today',
   
      },
      {
        "id": 2,
        "name": "Monir Uzzaman",
        "image": '/expert/two.png',
        "linkedin": 'register for free',
      
      },
    {
        "id": 3,
        "name": "John Bond",
        "image": '/expert/three.png',
        "linkedin": 'start teaching today',
   
      },
      {
        "id": 4,
        "name": "Sophia Smith",
        "image": '/expert/four.png',
        "linkedin": 'register for free',
    
      },
]
    return (
   <div className='bg-[#F9F9F9] py-28'>
         <div className='max-w-screen-xl mx-auto px-14'>
         <SectionTitle  heading={'Our Expert Instructors'} subHeading={'INSTRUCTORS'}/>
        <div className='grid grid-cols-2 lg:grid-cols-4 mt-12 gap-x-5'>
          {
            data.map(e => (
              <div key={e.id} className='bg-white hover:shadow-2xl rounded-xl '>
                  <Image className="w-full h-[250px] rounded-xl"
                        src={e.image}
                        alt="Solar-academy Logo"
                        width={180}
                        height={40}/>
                        <h3 className='font-bold text-center text-[#040432] text-[18px] mt-8'>{e.name}</h3>
                        <p className='text-[#FD6309] text-[10px] text-center pb-5 mt-2'>Instructor</p>
                        <div className='flex gap-x-2 justify-center items-center mb-10'>
                          <MdOutlineFacebook></MdOutlineFacebook>
                          <RiInstagramFill></RiInstagramFill>
                          <AiFillTwitterCircle></AiFillTwitterCircle>
                          <TiSocialLinkedinCircular></TiSocialLinkedinCircular>
                        </div>
                 </div>
            ))
          }
        </div>
        </div>
   </div>
    );
};

export default ExpertInstructor;