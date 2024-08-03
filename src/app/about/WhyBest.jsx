import SectionTitle from "@/component/reuseable/SectionTitle";
import React from "react";
import img1 from "../../assets/whyChoose/image 9.png";
import img2 from "../../assets/whyChoose/image 9 (1).png";
import img3 from "../../assets/whyChoose/image 9 (2).png";
import Image from "next/image";

const WhyBest = () => {
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
	];
	return (
		<div className="bg-[#F1F3FC] px-[114px] pb-40 pt-14">
			<SectionTitle
				heading={"Why We Are The Best"}
				subHeading={"BEST LEARNING PLATFORM"}
			/>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-x-7 gap-y-7 mt-20">
				{data.map((e) => (
					<div
						key={e.id}
						className="rounded-lg p-8"
						style={{ background: e.background }}
					>
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
							<h3 className="font-semibold text-[18px] text-[#040432] mt-3">
								{e.name}
							</h3>
							<p className=" text-[16px] text-[#585883] mr-10 leading-7 mt-3">
								{e.title}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default WhyBest;
