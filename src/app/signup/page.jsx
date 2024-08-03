import Image from "next/image";
import React from "react";
import { BsGoogle } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import img from '../../assets/banner/istockphoto-1396113348-612x612 1.png'

const page = () => {
	return (
		<div className="flex">
			<div className="w-1/2 mx-auto justify-center items-center px-[144px] py-24">
				<h5 className="text-3xl font-bold">Hi, Welcome to Solar-Academy</h5>
				<p className="text-base mt-3">Create a new account to enjoy</p>
				<div className="text-center">
					<p className="inline-flex justify-center items-center gap-2 py-3 border-2 border-dashed border-slate-500 w-2/3 mt-11">
						<BsGoogle className="text-2xl text-green-700" />{" "}
						<span className="text-base">Sign up with Google</span>{" "}
					</p>
					<p className="inline-flex justify-center items-center gap-2 py-3 border-2 border-dashed border-slate-500 w-2/3 mt-5">
						<FaFacebook className="text-2xl text-sky-600" />{" "}
						<span className="text-base">Sign up with Facebook</span>{" "}
					</p>
				</div>
				<div className="text-center my-10">OR Sign in with Email</div>

				<div className="flex gap-5">
					<label className="form-control w-full max-w-xs">
						<div className="label">
							<span className="label-text text-sm">First Name</span>
						</div>
						<input
							type="text"
							placeholder="Type here"
							className="input input-bordered w-full max-w-xs p-3 border-2 border-slate-500 rounded-sm"
						/>
					</label>
					<label className="form-control w-full max-w-xs">
						<div className="label">
							<span className="label-text text-sm">Last Name</span>
						</div>
						<input
							type="text"
							placeholder="Type here"
							className="input input-bordered w-full max-w-xs p-3 border-2 border-slate-500 rounded-sm"
						/>
					</label>
				</div>
				<label className="form-control w-full max-w-xs">
					<div className="label mt-5">
						<span className="label-text text-sm">User Name</span>
					</div>
					<input
						type="text"
						placeholder="Type here"
						className="input input-bordered w-full p-3 border-2 border-slate-500 rounded-sm"
					/>
				</label>
				<label className="form-control w-full max-w-xs">
					<div className="label mt-5">
						<span className="label-text text-sm">Email address</span>
					</div>
					<input
						type="email"
						placeholder="Type here"
						className="input input-bordered w-full p-3 border-2 border-slate-500 rounded-sm"
					/>
				</label>
				<label className="form-control w-full max-w-xs">
					<div className="label mt-5">
						<span className="label-text text-sm">Password</span>
					</div>
					<input
						type="password"
						placeholder="Type here"
						className="input input-bordered w-full p-3 border-2 border-slate-500 rounded-sm"
					/>
				</label>
				<label className="form-control w-full max-w-xs">
					<div className="label mt-5">
						<span className="label-text text-sm">Confirm Password</span>
					</div>
					<input
						type="password"
						placeholder="Type here"
						className="input input-bordered w-full p-3 border-2 border-slate-500 rounded-sm"
					/>
				</label>
                <button className="btn btn-active btn-primary w-full mt-5 bg-orange-500 p-4 rounded-sm text-white">Sign Up</button>
				<p className="text-sm text-[#8F95B2] mt-5">Already have an account? <span className="text-orange-500">Login Here</span></p>
			</div>
			<div className="w-1/2 bg-[#EAF3FA] flex justify-center items-center px-10">
				<Image src={img} alt="/" height={100} width={100} className="h-[ 416px] w-[612px] justify-center items-center" />
			</div>
		</div>
	);
};

export default page;
