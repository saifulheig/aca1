import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegStar, FaRegUser } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import SectionTitle from "../reuseable/SectionTitle";

const Courses = () => {
	const data = [
		{
			id: 1,
			name: "UI Design Patterns and Best Practices",
			image: "/course/one.jpg",
			review: 6,
			buyer: 0,
			price: "$200",
			type: "Free",
		},
		{
			id: 2,
			name: "UI Design with Photoshop from Beginner to Expert",
			image: "/course/one.jpg",
			review: 2,
			buyer: 5,
			price: "$200",
			type: "Free",
		},
		{
			id: 3,
			name: "UI & Web Design Using Adobe XD",
			image: "/course/one.jpg",
			review: 7,
			buyer: 0,
			price: "$200",
			type: "Free",
		},
		{
			id: 4,
			name: "User Experience Research and Design",
			image: "/course/one.jpg",
			review: 4,
			buyer: 1,
			price: "$200",
			type: "Free",
		},
		{
			id: 5,
			name: "User-Centered Prototyping and Design",
			image: "/course/one.jpg",
			review: 0,
			buyer: 0,
			price: "$200",
			type: "Free",
		},
		{
			id: 6,
			name: "Friendly User Interface Design Mastery",
			image: "/course/one.jpg",
			review: 3,
			buyer: 3,
			price: "$200",
			type: "Free",
		},
	];
	return (
		<div className="bg-white pt-2.5 pb-28">
			<div className="max-w-screen-xl mx-auto px-14">
				<SectionTitle
					heading={"Explore Popular Courses"}
					subHeading={"COURSES"}
				/>
				{/* courses card  */}
				<div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3 mt-14">
					{data.map((e) => (
						<div
							key={e.id}
							className=" rounded-md shadow-md hover:shadow-2xl bg-white "
						>
							<Image
								className="object-cover object-center w-full rounded-t-xl h-[258px] dark:bg-gray-500"
								width={150}
								height={20}
								src={e.image}
								alt=""
							/>
							<div className="flex flex-col justify-between p-6 space-y-4">
								<div className="">
									<h3 className="font-semibold mb-3 mt-1 text-[#fd823a] text-[13px]">
										{e.price}
									</h3>
									<Link href="/courses">
										{" "}
										<h2 className="text-[18px] mb-4 hover:text-[#fd823a] font-semibold tracking-wide text-[#040432]">
											{e.name}
										</h2>
									</Link>
									<div className="flex items-center gap-3 ">
										<div className="flex gap-2">
											<FaRegStar className="text-[#FDC709]" />
											<FaRegStar className="text-[#FDC709]" />
											<FaRegStar className="text-[#FDC709]" />
											<FaRegStar className="text-[#FDC709]" />
											<FaRegStar className="text-[#FDC709]" />
										</div>
										<p className="text-[#8C8CAA] text-xs -mt-1">({e.review} Review)</p>
									</div>
								</div>
								<hr />
								<div className="flex justify-between ">
									<p className="inline-flex justify-center items-center gap-2 text-xs text-[#585883]">
										<CiClock2 className="w-5 h-5 " />
										<span>2 Hours 24 Min</span>
									</p>
									<p className="inline-flex justify-center items-center gap-2 text-xs text-[#585883]">
										<FaRegUser className="w-5 h-5" />
										<span>{e.buyer}</span>
									</p>

								
								</div>
							</div>
						</div>
					))}
				</div>
				{/* courses button  */}

				<div className="flex justify-center mt-14">
					<Link href="/courses">
						<button className="uppercase mb-2 min-w-40 tracking-wide text-[15px] py-4 font-medium text-white bg-orange-600 hover:bg-[#fd823a]  rounded">
							view all course
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Courses;
