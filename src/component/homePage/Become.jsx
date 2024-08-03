// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';


// const Become = () => {
//     const data = [
//         {
//             "id": 1,
//             "name": "Become An Instructor",
//             'text': 'Become an instructor and share your expertise with a global community. Inspire others to learn & create an impact',
//             "image": '/become/instructor.png',
//             "btntext": 'start teaching today',
//             "link": '/instructor-register',
//           },
//           {
//             "id": 2,
//             "name": "Become A Student",
//             'text': 'Become a student and unlock a world of knowledge with our interactive courses. Explore, learn, and grow at your own pace',
//             "image": '/become/user.png',
//             "btntext": 'register for free',
//             "link": '/register',
//           },
//     ]
//     return (
//         <div className='bg-gray-100 py-28'>
//            <div className='max-w-screen-xl mx-auto'>
//          <div className='lg:flex gap-5'>
//          {
//             data.map(e => (
//                 <div key={e.id} className=''>
//             {/* card component  */}
//                 <div className='bg-white px-5 pt-5 pb-14 hover:shadow-xl rounded-2xl'>
//                 <Image className="w-full h-[34vh]"
//                         src={e.image}
//                         alt="Solar-academy Logo"
//                         width={150}
//                         height={40}/>
//                         <h1 className='text-center mt-8 text-3xl font-semibold '>{e.name}</h1>
//                         <p className='text-gray-600 text-center py-3'>{e.text}</p>
//                 </div>
//                 <div className='-mt-8 flex justify-center '>
//                    <Link href={e.link}>
//                    <button className='px-6 uppercase font-medium tracking-wide mr-16 text-[16px] py-4  text-white bg-orange-600 hover:bg-[#090332] rounded'>{e.btntext}</button>
//                    </Link>
//                 </div>
//                 </div>
//             ))
//            }
//          </div>
//            </div>
//         </div>
//     );
// };

// export default Become;


import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Become = () => {
  return (
    <div className='bg-[#F9F9F9]'>
      <div className='max-w-screen-xl mx-auto px-14 '>
        <div className='flex justify-between items-center pb-20'>
          <div className='w-1/2'>
            <h1 className='text-[#040432] text-4xl font-medium'>Become An Instructor</h1>
            <p className='text-base text-[#585883] leading-7 mt-5'>Become an instructor and share your expertise with a global community. Inspire others to learn & create an impact</p>
            <Link href='#'>
              <button className="uppercase mb-2 min-w-40 tracking-wide text-[15px] py-4 font-medium text-white bg-orange-600 hover:bg-[#fd823a]  rounded px-2 mt-5">
                start teaching today
              </button>
            </Link>
          </div>
          <div className='bg-white p-4'>
            <Image src="/become/instructor.png" alt='' width={400} height={100}></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Become;