"use client"
import SectionTitle from "@/component/reuseable/SectionTitle";
import React from "react";

import Image from "next/image";
import WhoWeAre from "./whoWeAre";
import WhyBest from "./WhyBest";
import Instructor from "./Instructor";
//h-[3611px]
const page = () => {
	return (
		<div className=" mx-auto bg-[#FFFFFF]">
			

          <WhoWeAre/>
          <WhyBest/>
		  <Instructor/>

		</div>
	);
};

export default page;
