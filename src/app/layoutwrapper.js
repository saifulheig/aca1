"use client";

import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";

import { usePathname } from "next/navigation";

export default function LayoutWrapper({ children }) {
	const pathname = usePathname();
	const isAuthPage = pathname === "/signup" || pathname === "/login";

	return (
		<div className="flex flex-col min-h-[100vh]">
			<div className="flex-grow">
				{!isAuthPage && <Navbar />}
				{children}
			</div>
			<div className="flex-shrink-0">
				{!isAuthPage && <Footer />}
			</div>
		</div>
	);
}
