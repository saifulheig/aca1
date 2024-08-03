import React from 'react';
import Logo from './Logo';
import { IoIosArrowForward } from "react-icons/io";
import { CgFacebook } from "react-icons/cg";
import { ImLinkedin2 } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import Link from 'next/link';

const Footer = () => {
	return (
		<div className='bg-[#F8FAFF]'>
			<footer className=" text-black max-w-screen-xl mx-auto px-14 pt-20">
				<div className="container grid grid-cols-4 gap-x-5 ">
					<div>
						<Logo />
						<p className='text-[#6F6C90] mt-6 text-base leading-7'>Our mission extends beyond boundaries, providing a top-tier education that is not confined by location, offering limitless opportunities to anyone, anywhere</p>
						<div className='-ml-2 flex items-center gap-x-4 mt-6'>
							<div><Link href="#"><CgFacebook className='w-5 h-5 text-[#FD6309] ' /></Link></div>
							<div><Link href="#"><ImLinkedin2 className='w-4 h-5 text-[#FD6309]' /></Link></div>
							<div><Link href="#"><IoLogoYoutube className='w-4 h-5 text-[#FD6309] mt-1' /></Link></div>
						</div>
					</div>

					<div className="space-y-3">
						<h3 className="tracking-wide mb-8 font-bold text-xl text-[#091540]">Company</h3>
						<ul className="space-y-1 text-[16px] text-[#5A627F]">
							<li className='flex'><a rel="noopener noreferrer" href="#">About Us</a>
							</li>
							<li className='flex py-5'><Link href="#">Student Registration</Link>
							</li>
							<li className='flex'><Link href="#">Become an Instructor</Link>
							</li>
							<li className='flex py-5'><Link href="#">FAQs</Link>
							</li>
						</ul>
					</div>
					<div className="space-y-3">
						<h3 className="tracking-wide font-bold text-xl mb-8 text-[#091540]">Quick Links</h3>
						<ul className="space-y-1 text-[16px] text-[#5A627F]">
							<li className='flex'><Link href="#">Upcoming Webinars</Link>
							</li>
							<li className='flex py-5'><Link href="#">Free Course</Link>
							</li>
							<li className='flex'><Link href="#">Blog</Link>
							</li>
							<li className='flex py-5'><Link href="#">Cart</Link>
							</li>
						</ul>
					</div>
					<div className="space-y-3">
						<h3 className="font-bold text-xl text-[#091540] mb-8">Contact Us</h3>
						<ul className="space-y-1 text-[16px] text-[#5A627F]">
							<li className='flex gap-2'>
								<FaLocationDot className='w-5 h-5 mr-1  ' /><Link href="#">Rue du jura 3, 1023 Crissier, Switzerland</Link>
							</li>
							<li className='flex gap-2 py-3'>
								<MdOutlineMail className='w-5 h-5 mr-1  ' /><Link href="#">contact@solar-academy.net</Link>
							</li>
							<li className='flex gap-3'>
								<FaPhone className='w-4 mr-1 h-4' />	<Link href="#">+41 21 561 53 15</Link>
							</li>
							<li className='flex gap-2 py-3'>
								<FaWhatsapp className='w-5 mr-1  h-5' /><Link href="#">+41 76 566 98 04</Link>
							</li>
						</ul>
					</div>


				</div>
				<hr className='mt-16' />
				<div className='flex justify-between items-center py-5'>
					<p className='text-[#5A627F] text-base'>Copyright © 2024 HF Consultancy</p>
					<p className='text-[#5A627F] text-base'>All Rights Reserved | <span className='text-[#FD6309]'>Terms and Conditions</span>  | <span className='text-[#FD6309]'>Privacy Policy</span> </p>
				</div>
			</footer>
		</div>
	);
};

export default Footer;