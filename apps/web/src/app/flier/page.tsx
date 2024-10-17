import Navbar from "@/components/shared/Navbar";
import { Oswald } from "next/font/google";
import c from "config"; // Assuming 'config' is needed somewhere
import Image from "next/image"; // Import Next.js Image component
import Link from "next/link";

// Optional: Load Google Font 'Oswald'
const oswald = Oswald({ subsets: ["latin"], weight: "400" });

export default function Page() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
			{/* Navbar */}
			<Navbar />

			{/* Title */}
			<h1 className={`text-4xl font-bold mb-8 ${oswald.className}`}>
				RowdyCon Flier
			</h1>

			{/* Large Image */}
			<Image
				src="/public/logo/RowdyCon Flier.png"
				alt="RowdyCon Flier"
				width={800} // Adjust size as needed
				height={1200}
				className="rounded-lg shadow-lg"
				priority // Ensures the image is loaded eagerly
			/>
		</div>
	);
}
