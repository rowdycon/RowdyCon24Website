import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/landing/Hero";

import About from "@/components/landing/About";

import Partners from "@/components/landing/Partners";
import Footer from "@/components/landing/Footer";
// import MLHBadge from "@/components/landing/MLHBadge";

import { Oswald } from "next/font/google";
import WorkWithUs from "@/components/landing/WorkWithUs";

const oswald = Oswald({
	variable: "--font-oswald",
	subsets: ["latin"],
});

export default function Home() {
	return (
		<div className={`${oswald.variable} w-full overflow-x-hidden`}>
			<Navbar />
			{/* <MLHBadge /> */}
			<main className="overflow-x-hidden">
				<Hero />

				<About />
				<Partners />
				<WorkWithUs />
				<Footer />
			</main>
		</div>
	);
}

export const runtime = "edge";
export const revalidate = 30;
