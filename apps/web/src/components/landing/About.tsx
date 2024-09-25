import Balancer from "react-wrap-balancer";
import Image from "next/image";
import D1 from "../../../public/img/landing/d1.svg";
import D2 from "../../../public/img/landing/d2.svg";
import D3 from "../../../public/img/landing/d3.svg";
import D4 from "../../../public/img/landing/d4.svg";
import Dino_Coding from "../../../public/img/landing/dinos_coding.png";
import { Button } from "../shadcn/ui/button";
import Link from "next/link";

export default function About() {
	const d1_stylesheet = {
		width: "25rem",
		height: "auto",
		sm: "width: 30rem",
	};
	return (
		<section
			className="flex w-full flex-col px-5 pt-10 md:pt-20 lg:pt-40"
			id="About"
		>
			<div className="flex flex-col md:flex-row w-full items-start justify-between pt-10 px-4 md:px-12 mb-8">
				<h1 className="text-4xl font-black md:text-5xl">Who are we?</h1>
				<h3 className="text-left text-lg font-bold md:text-2xl md:w-1/2">
					RowdyCon is a one-day cybersecurity conference where San Antonio area based students can learn <span style={{ color: "#ff6347" }}>new skills, participate in challenges, and network</span>! You'll
					also have the opportunity to attend a plethora of different <span style={{ color: "#ff6347" }}>workshops and meet employers</span>. We welcome all students no matter what major or skill level, so go ahead and register today to secure your spot!
				</h3>
			</div>

			<div className="flex flex-col md:flex-row w-full items-start justify-between pt-10 px-4 md:px-12 mb-8">
				<h1 className="text-4xl font-black md:text-5xl">Interested in Volunteering?</h1>
				<h3 className="text-left text-lg font-bold md:text-2xl md:w-1/2">
					We have plenty of things to do the day of RowdyCon and we'd love your help if you're able to give it! Sign up below!

					<div className="mt-2 flex w-full items-center justify-center pt-3"> {/* Reduced margin here */}
					<Link href={"https://forms.gle/G8t8UQxiQLGbFLVE9"} target="_blank" rel="noopener noreferrer">
					<Button variant={"outline"} size={"sm"} className="px-10 md:px-10 py-5 md:py-5 md:text-2xl" style={{ backgroundColor: '#ff6347' }}>
						Volunteer Form
					</Button>
					</Link>
				</div>
				</h3>

			</div>

			<div className="flex flex-col md:flex-row w-full items-start justify-between pt-10 px-4 md:px-12">
				<h1 className="text-4xl font-black md:text-5xl">Interested in Partnering?</h1>
				<h3 className="text-left text-lg font-bold md:text-2xl md:w-1/2">
					RowdyCon is very grateful for the amazing support of our partners. If you or your organization are interested in becoming a partner, click the link below to explore our Partner Packet for more information.

					<div className="mt-2 flex w-full items-center justify-center pt-3 pb-5"> {/* Reduced margin here */}
					<Link href={"https://forms.gle/YKMAhqrjfTVbN3H47"} target="_blank" rel="noopener noreferrer">
					<Button variant={"outline"} size={"sm"} className="px-10 md:px-10 py-5 md:py-5 md:text-2xl" style={{ backgroundColor: '#ff6347' }}>
						Partner Form
					</Button>
					</Link>
					</div>
				</h3>
			</div>
		</section>
	);
}


