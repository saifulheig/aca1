"use client";
import Link from "next/link";
import Logo from "./Logo";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            if (isDropdownOpen) {
                setIsDropdownOpen(false); // Close dropdown on scroll
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isDropdownOpen]);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className={`fixed w-full z-40 transition-colors duration-300 ${isScrolled ? "bg-white text-black shadow-md" : "bg-transparent mt-3 shadow-sm"} py-2`}>
            <div className="flex flex-col lg:flex-row px-4 w-full max-w-screen-lg mx-auto">

                <div className="flex justify-between items-center w-full lg:w-auto">
                    <Link href={"/"} className="block lg:hidden lg:h-16 lg:w-36 h-10 w-20">
                        <Logo />
                    </Link>
                    <div className="dropdown relative lg:hidden">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost"
                            onClick={handleDropdownToggle}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        {isDropdownOpen && (
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-100 rounded-box w-52 absolute right-0"
                            >
                                <li>
                                    <a href="/courses">Courses</a>
                                </li>
                                <li>
                                    <a href="/about">About</a>
                                </li>
                                <li>
                                    <a href="">Instructor</a>
                                </li>
                                <li>
                                    <a href="">Webinars</a>
                                </li>
                                <li>
                                    <a href="">Blog</a>
                                </li>
                                <li>
                                    <a href="">Contact</a>
                                </li>
                                <div className="mt-2">
                                    <div className="ml-3 font-semibold">
                                        <div className="my-2">
                                            <Link
                                                className="bg-[#FD6309] rounded-md text-white px-4 py-1"
                                                href=""
                                            >
                                                Login
                                            </Link>
                                        </div>
                                        <div className="my-2">
                                            <Link
                                                className="bg-[#FD6309] rounded-md text-white px-4 py-1"
                                                href="/signup"
                                            >
                                                SignUp
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex justify-between items-center w-full max-w-screen-xl mx-auto px-14">
                <Link href={"/"} className="lg:block hidden mr-16">
                    <Logo />
                </Link>
                <ul className="menu menu-horizontal px-1 text-base font-medium flex items-center gap-x-16">

                    <li>
                        <a href="/courses">Courses</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="">Instructor</a>
                    </li>
                    <li>
                        <a href="">Webinars</a>
                    </li>
                    <li>
                        <a href="">Blog</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                    <div>
                        <div className=" bg-[#FD6309] hover:bg-[#fd823a]  rounded-md text-white flex px-4 py-2 font-semibold">
                            <div>
                                <Link href="">Login</Link>
                            </div>
                            <div className="px-3">|</div>
                            <div>
                                <Link href="/signup">Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </ul>

            </div>
        </div>
    );
};

export default Navbar;
