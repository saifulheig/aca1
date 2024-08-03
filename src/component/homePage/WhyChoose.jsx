import Image from "next/image";
import Link from "next/link";
import React from "react";

import img1 from "../../assets/whyChoose/image 9.png";
import img2 from "../../assets/whyChoose/image 9 (1).png";
import img3 from "../../assets/whyChoose/image 9 (2).png";
import img4 from "../../assets/whyChoose/image 9 (3).png";

const WhyChoose = () => {
	const data = [
		{
			id: 1,
			name: "High Quality Courses",
			title:
				"Excellent courses delivered by industry professionals, ensuring excellence in learning.",
			image: img1,

			background: "linear-gradient(0deg, #FEFEFD 0%, #FFFCF5 100%)",
		},
		{
			id: 2,
			name: "Expert Instructors",
			title:
				"Our seasoned instructors, experts in their field, guide you through the learning journey.",
			image: img2,
			background: "linear-gradient(0deg, #FEFCFC 0%, #FDF4F5 100%)",
		},
		{
			id: 3,
			name: "Life Time Access",
			title:
				"Enjoy lifetime access to our content, empowering you to maximize its benefits indefinitely.",
			image: img3,
			background: "linear-gradient(0deg, #FDFEFD 0%, #F5FFF7 100%)",
		},
		{
			id: 4,
			name: "Dedicated Support",
			title:
				"Count on our unwavering support for all your queries and needs related to the provided material.",
			image: img4,
			background: "linear-gradient(0deg, #FDFDFE 0%, #F8F5FF 100%)"
		},
	];
	return (
		<div className="bg-white py-28">
			<div className="grid grid-cols-3 gap-x-5 max-w-screen-xl mx-auto px-14">
				{/* 1st div  */}
				<div className="mt-5">
					<h1 className="text-[36px] font-medium text-[#040432]">Why Choose Us?</h1>
					<p className="leading-7 text-[#585883] mt-4">
						Discover top-graded courses facilitated by industry experts,
						ensuring the delivery of high-quality educational content. Benefit
						from the expertise of our instructors, who bring extensive knowledge
						and experience from the industry.
					</p>
					<Link href="/about">
						<button className="mt-12 min-w-40 tracking-wide mr-16 text-[15px] py-4 font-medium text-white bg-orange-600 hover:bg-[#fd823a] rounded">
							LEARN MORE
						</button>
					</Link>
				</div>
				{/* 2nd div  */}
				<div className="col-span-2">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-7">
						{data.map((e) => (
							<div key={e.id} className="rounded-lg p-8" style={{ background: e.background }}>
								<div className="mr-3 mb-2">
									<Image
										src={e?.image}
										alt={e?.name}
										width={100}
										height={52}
										className="w-[52px] h-[52px]"
									/>
								</div>
								<div className="mb-3">
									<h3 className="font-semibold text-[18px] text-[#040432] mt-3">{e.name}</h3>
									<p className=" text-[16px] text-[#585883] mr-10 leading-7 mt-3">{e.title}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhyChoose;
