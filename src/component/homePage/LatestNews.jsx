import React from 'react';
import SectionTitle from '../reuseable/SectionTitle';
import Image from 'next/image';
import { FaUser, FaCalendarAlt } from "react-icons/fa";
import Link from 'next/link';


const LatestNews = () => {
  const data = [
    {
      "id": 1,
      "name": "Your Ultimate Guide to Success in Virtual Computing ",
      "title": "Introduction: Our virtual cloud computing blog will serves you as your guide through the immense world of digital transformation.",
      "image": '/course/cloud.jpg',
      "publisher": "Admin",
      "date": 'February 12, 2024',
      "type":'Technology'
    },
    {
      "id": 2,
      "name": "Cloud Computing Unveiled: Exploring Types, Advantages, and Future Trends",
      "title": "Introduction: Cloud computing is a powerful force in today’s quickly changing digital landscape, changing how businesses innovate and run. This",
      "image": '/course/cloud.jpg',
      "publisher": "Admin",
      "date": 'February 1, 2024',
      "type":'Technology'
    },
    {
      "id": 3,
      "name": "Solar Power Systems: Bringing Light to the Future",
      "title": "Introduction Solar energy has become a top contender in a world where sustainable energy is becoming more and more important.",
      "image": '/course/cloud.jpg',
      "publisher": "Admin",
      "date": 'January 1, 2024',
      "type":'Technology'
    }
  ];

  return (
    <div className='bg-white'>
      <div className='max-w-screen-xl mx-auto px-14 py-28'>
        <SectionTitle heading={'Latest News'} subHeading={'BLOG'} />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 gap-x-9'>
          {
            data.map(e => (
              <div key={e.id} className="rounded-lg shadow-md hover:shadow-2xl ">
                <Image
                  className="object-cover object-center rounded-md w-full h-[217px] p-4"
                  width={150}
                  height={20}
                  src={e.image}
                  alt="" />
                <div className=" py-4 px-5">
                  <div className=" pt-1 ">
                    <p className='text-[#FD6309] text-sm font-semibold py-1 px-2 w-[30%] rounded-md' style={{backgroundColor:"rgba(253, 99, 9, 0.10"}}>{e.type}</p>
                    <Link href="/blog"> <h2 className="text-[24px] text-[#181A2A] hover:text-[#fd823a] font-semibold tracking-wide mt-3">{e.name}</h2></Link>
                    <div className='flex gap-7 mb-5 mt-3'>
                      <div className='flex gap-2'>
                        <FaUser className='text-[#fd823a] ' />
                        <p className='text-sm text-[#97989F] font-medium'>{e.publisher}</p>
                      </div>
                      <div className='flex gap-2 '>
                        <FaCalendarAlt className='text-[#fd823a] ' />
                        <p className='text-sm text-[#97989F]  font-medium'>{e.date}</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default LatestNews;