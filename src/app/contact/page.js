import React from 'react';
import { TfiEmail } from "react-icons/tfi";
import { GrMapLocation } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";


const page = () => {
    return (
        <div className='bg-white py-24 '>
            <div className=''>
                   <div className='bg-[#463f93] py-28 '> 
                   <h1 className='text-center text-white text-[52px] font-semibold'>Contact</h1>

                    <div className='flex '>
                    <nav aria-label="breadcrumb" className="w-full p-4  dark:bg-gray-100 dark:text-gray-800">
                    <ol className="flex h-8 space-x-2">
                        
                        <li className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" className="w-2 h-2 mt-1 transform rotate-90 fill-current dark:text-gray-400">
                                <path d="M32 30.031h-32l16-28.061z"></path>
                            </svg>
                            <a rel="noopener noreferrer" href="#" className="flex items-center px-1 capitalize hover:underline">Parent</a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" className="w-2 h-2 mt-1 transform rotate-90 fill-current dark:text-gray-400">
                                <path d="M32 30.031h-32l16-28.061z"></path>
                            </svg>
                            <a rel="noopener noreferrer" href="#" className="flex items-center px-1 capitalize  cursor-default">Current</a>
                        </li>
                    </ol>
                </nav>
                    </div>

                   </div>


                    <div className='max-w-screen-xl mt-24 flex gap-12 mx-auto'> 
            {/* 1st part  */}
                    <div className='flex-1 mt-16'>
                        <h1 className='text-[42px] font-semibold mb-6'>Leave Us A Message</h1>
                        <p className='text-gray-600 w-[86%] mb-12'>We’d love to hear from you! Share your concerns , Start the inquiry  and our team will assist you to enhance your learning journey with us.</p>
                        <div className='flex gap-2.5'>
                            <TfiEmail className='w-16 h-12 text-orange-600'/>
                            <div>
                                <h3 className='text-[22px] font-semibold mb-2.5 '>Email Address</h3>
                                <p className='text-gray-600'>contact@solar-academy.net</p>

                            </div>

                        </div>
                        <div className='flex gap-2.5 my-6'>
                            <FiPhoneCall className='w-16 h-12  text-orange-600'/>
                            <div>
                                <h3 className='text-[22px] font-semibold mb-2.5 '>Phone Number</h3>
                                <p className='text-gray-600'>+41 21 561 53 15</p>

                            </div>

                        </div>
                        <div className='flex gap-2.5'>
                            <IoLogoWhatsapp className='w-16 h-12 text-orange-600'/>
                            <div>
                                <h3 className='text-[22px] font-semibold mb-2.5 '>WhatsApp Number</h3>
                                <p className='text-gray-600'>+41 76 566 98 04</p>

                            </div>

                        </div>
                        <div className='flex gap-2.5 mt-6'>
                            <GrMapLocation className='w-16 h-12 text-orange-600'/>
                            <div>
                                <h3 className='text-[22px] font-semibold mb-2.5 '>Our Location</h3>
                                <p className='text-gray-600'>Rue du jura 3, 1023 Crissier, Switzerland</p>

                            </div>

                        </div>

                    </div>
                    {/* 2nd part  */}
                    <div className='flex-1 mb-5'> 
                    <div className="p-8 mt-8 shadow-xl max-w-lg rounded-xl mx-auto">
                    
                    <form>
                        <div className="p-4 w-full">
                        <div className="relative">
                            <input
                            type="text"
                            id="name"
                            name="name"
                            required=""
                            placeholder='Enter Your Full Name'
                            className="pl-3 w-full bg-white rounded border border-gray-300 focus:border-[#463f93] focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-3 px-1 leading-8 transition-colors duration-200 ease-in-out "
                            />
                        </div>
                        </div>
                        <div className="p-4 w-full">
                        <div className="relative">
                            <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder='Email Address'
                            className=" w-full pl-3 bg-white rounded border border-gray-300 focus:border-[#463f93] focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        </div>
                        <div className="p-4 w-full">
                        <div className="relative">
                          
                            <input
                            type="text"
                            id="subject"
                            name="subject"
                            required=""
                            placeholder='Subject'
                            className="pl-3 w-full bg-white rounded border border-gray-300 focus:border-[#463f93] focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out "
                            />
                        </div>
                        </div>
                        <div className="p-4 w-full">
                        <div className="relative">
                            <textarea
                            id="message"
                            name="message"
                            required=""
                            placeholder='Your Message'
                            className=" w-full bg-white rounded border border-gray-300 focus:border-[#463f93] focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-3 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            defaultValue={""}
                            />
                        </div>
                        </div>
                        <div className="p-4 w-full">
                        <div className='mb-3'>
                            <button
                            type="submit"
                            className="flex text-white bg-orange-600  py-4 px-8 focus:outline-none hover:bg-[#463f93] rounded text-medium font-semibold shadow-lg mx-0 flex-col text-center"
                            >
                            SUBMIT FORM
                            </button>
                        </div>
                        </div>
                    </form>
                    </div>

                    </div>
                    </div>
            </div>
        </div>
    );
};

export default page;