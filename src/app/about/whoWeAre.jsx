import SectionTitle from '@/component/reuseable/SectionTitle';
import Image from 'next/image';
import React from 'react';
import img1 from "../../assets/aboutus/image 10.png";
import img2 from "../../assets/aboutus/image 11.png";
import img3 from "../../assets/aboutus/image 12.png";

const WhoWeAre = () => {
    return (
        <div className='mb-[300px] px-[114px] pt-32'>
            <SectionTitle heading={"About Us"} />
			<section className="flex flex-wrap justify-between content-between mt-8">
				<div className="w-1/2 mt-14">
					<h6 className="text-[#FD6309] text-md font-medium">WHO WE ARE</h6>
					<h3 className="text-3xl font-semibold mt-4 text-[#040432]">
						Solar Academy Offers Courses For Skill Development And Personal
						Well-Being
					</h3>
					<p className="text-lg mt-4 text-start leading-relaxed">
						Elevate your life with our excellently crafted programs that not
						only sharpen your skills but also nurture your spiritual growth.
						From professional development to personal enrichment, Solar Academy
						is your comprehensive destination, providing top-notch courses and
						unwavering support for an impactful transformation. Our commitment
						to excellence extends beyond courses. Our exceptional team of
						teachers and management ensures a high-quality learning experience.
						With brilliant courses tailored for your growth, we strive to create
						a nurturing environment that fosters not just skill development but
						also personal well-being.
					</p>
				</div>
				<div className="w-full md:w-1/2 mx-auto pl-14">
					<div className="relative w-full h-full">
						<div className="absolute image-stack-1">
							<Image
								className="w-64 h-80 object-cover rounded-lg shadow-lg"
								src={img2}
								alt="Students"
								width={160}
								height={160}
							/>
						</div>
						<div className="image-stack-2">
							<Image
								className="w-[347px] h-[380px] object-cover rounded-lg shadow-lg"
								src={img1}
								alt="Teacher"
								width={160}
								height={160}
							/>
						</div>
						<div className="absolute image-stack-3">
							<Image
								className="w-[200px] h-[220px] object-cover rounded-lg shadow-lg"
								src={img3}
								alt="Student"
								width={160}
								height={160}
							/>
						</div>
					</div>
				</div>
			</section>
			<style jsx>{`
				.image-stack img {
					box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
				}
				.image-stack-1 {
					margin-top: -90px;
                    margin-left: 230px;
				}
				.image-stack-2 {
					margin-top: 100px;
					margin-right: -40px;
				}
				.image-stack-3 {
					margin-top: -75px;
					margin-left: 230px;
				}
			`}</style>
        </div>
    );
};

export default WhoWeAre;