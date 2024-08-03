"use client";
import { FaCloud, FaQuran } from "react-icons/fa";
import { FaMicrosoft, FaTachographDigital } from "react-icons/fa6";
import {
	FaNetworkWired,
	FaLaptopCode,
	FaGlobe,
	FaBullhorn,
	FaSolarPanel,
	FaBusinessTime,
	FaTrophy,
} from "react-icons/fa";
import { BsImages } from "react-icons/bs";
import Link from "next/link";
import SectionTitle from "../reuseable/SectionTitle";

import img1 from "../../assets/categoryIcons/image 8.png";
import img2 from "../../assets/categoryIcons/image 8 (1).png";
import img3 from "../../assets/categoryIcons/image 8 (2).png";
import img4 from "../../assets/categoryIcons/image 8 (3).png";
import img5 from "../../assets/categoryIcons/image 8 (4).png";
import img6 from "../../assets/categoryIcons/image 8 (5).png";
import img7 from "../../assets/categoryIcons/image 8 (6).png";
import img8 from "../../assets/categoryIcons/image 8 (7).png";
import img9 from "../../assets/categoryIcons/image 8 (8).png";
import img10 from "../../assets/categoryIcons/image 8 (9).png";
import img11 from "../../assets/categoryIcons/image 8 (10).png";
import img12 from "../../assets/categoryIcons/image 8 (11).png";

import Image from "next/image";

const Categories = () => {
	const data = [
		{
			id: 1,
			name: "Cloud Computing",

			image: img1,
		},
		{
			id: 2,
			name: "Microsoft 365 Productivity Suite",

			image: img2,
		},
		{
			id: 3,
			name: "Networking and Security",
			image: img3,
		},
		{
			id: 4,
			name: "Easy Quran Learning",
			image: img4,
		},
		{
			id: 5,
			name: "UI & UX Design",
			image: img5,
		},
		{
			id: 6,
			name: "Web Development",
			image: img6,
		},
		{
			id: 7,
			name: "Graphic Designing & Video Editing",
			image: img7,
		},
		{
			id: 8,
			name: "Digital Marketing",
			image: img8,
		},
		{
			id: 9,
			name: "Renewable Energy Solutions",
			image: img9,
		},
		{
			id: 10,
			name: "Business Management",
			image: img10,
		},
		{
			id: 11,
			name: "Personal Development",
			image: img11,
		},
		{
			id: 12,
			name: "Language Learning",
			image: img12,
		},
	];
	return (
		<div className="bg-gray-100 py-24">
			<div className="max-w-screen-xl pt-4 mx-auto ">
				<SectionTitle
					heading={"Popular Categories"}
					subHeading={"COURSE CATEGORIES"}
				/>
				<div className="mt-10 justify-center px-14 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
					{data?.map((e) => (
						<div
							key={e.id}
							className="w-[272px] h-60 flex flex-col gap-4 py-10 pb-3 hover:shadow-xl rounded-xl px-5 bg-white"
						>
							<div className="flex justify-center">
								<Image
									src={e?.image}
									alt={e?.name}
									width={55}
									height={55}
									className="w-14 h-14"
								/>
							</div>
							<h2 className="text-center text-xl font-semibold">{e.name}</h2>
							<p className="text-center  text-sm text-orange-600 hover:text-orange-700">
								View More
							</p>
						</div>
					))}
				</div>
				<div className="flex justify-center mt-14">
					<Link href="/courses">
						<button className="uppercase mb-2 min-w-40 tracking-wide text-[15px] py-3 px-4 font-medium text-white bg-orange-600 hover:bg-[#fd823a]  rounded">
							View All Categories
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Categories;
