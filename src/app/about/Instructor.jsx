import SectionTitle from "@/component/reuseable/SectionTitle";
import Image from "next/image";
import React from "react";
import img1 from "../../assets/aboutus/Rectangle 70.png";
import img2 from "../../assets/aboutus/Rectangle 70 (1).png";
import img3 from "../../assets/aboutus/Rectangle 70 (2).png";
import img4 from "../../assets/aboutus/Rectangle 70 (3).png";
import img5 from "../../assets/aboutus/Rectangle 648.png";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { AiFillTwitterCircle } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
const Instructor = () => {
	const data = [
		{
			id: 1,
			name: "Saiful Islam",
			Instructor: "Instructor",
			image: img1,
			background: "#fb7185",
		},
		{
			id: 2,
			name: "Monir Uzzaman",
			Instructor: "Instructor",
			image: img2,
			background: "#fdba74",
		},
		{
			id: 3,
			name: "John Bond",
			Instructor: "Instructor",
			image: img3,
			background: "#818cf8",
		},
		{
			id: 4,
			name: "Sophia Smith",
			Instructor: "Instructor",
			image: img4,
			background: "#d946ef",
		},
	];
	return (
		<div className="px-[114px] py-20 bg-[#F9F9F9]">
			<SectionTitle
				heading={"Our Expert Instructors"}
				subHeading={"INSTRUCTORS"}
			/>
			<div className="mt-10 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
				{data?.map((e) => (
					<div
						key={e.id}
						className="hover:shadow-lg shadow-md rounded-xl w-[270px] pb-10"
					>
						<div
							className="flex justify-center rounded-md"
							style={{ background: e.background }}
						>
							<Image
								src={e?.image}
								alt={e?.name}
								width={280}
								height={250}
								className=""
							/>
						</div>
						<h2 className="text-center text-xl font-bold mt-3">{e.name}</h2>
						<p className="text-center  text-sm text-orange-500 ">
							{e.Instructor}
						</p>
						<div className="flex justify-center items-center gap-3 mt-3">
							<FaFacebook />
							<IoLogoInstagram />
							<AiFillTwitterCircle />
							<CiLinkedin />
						</div>
					</div>
				))}
			</div>

			<div>
				<div className="hero bg-base-200 mt-24 py-10">
					<div className="hero-content flex justify-between">
						<div className="w-2.5/3 mt-16">
							<h1 className="text-3xl font-bold">Become An Instructor</h1>
							<p className="py-6">
                            Become an instructor and share your expertise with a global community. <br /> Inspire others to learn & create an impact
							</p>
							<button className="btn btn-primary bg-[#FD6309] py-3 px-4 text-[#FFFFFF] text-base rounded-sm">START TEACHING TODAY</button>
						</div>
						<div className="w-1.5/3 justify-end">
							<Image
								src={img5}
								className="max-w-lg rounded-lg"
								alt="/"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Instructor;
