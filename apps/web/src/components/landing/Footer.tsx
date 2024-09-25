"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Twitter, Github, Linkedin} from "lucide-react";
import Discord from "../../../public/img/discord.svg";
import { Button } from "../shadcn/ui/button";

export default function Footer() {
	const [showResources, setShowResources] = useState(false);
	const [showLinks, setShowLinks] = useState(false);
	const [showHackathons, setShowHackathons] = useState(false);

	return (
		<footer className="flex flex-col md:flex-row min-h-[25vh] w-full justify-between items-start border-t-2 border-muted-foreground p-4">
			<div className="flex flex-col items-start">

				<div className="relative w-[200px] h-[50px] md:w-[200px] md:h-[50px]">
								<Image
									src="/img/logo/rowdyconTextLogo.png"
									alt="RowdyCon Text Logo"
									fill
									className="object-contain"
								/>
				</div>


				{/* Credit for the website */}
				<p className="text-sm text-muted-foreground mt-2">
					Website back-end by ACM UTSA's Hackkit. Website front-end created by RowdyCon Tech Team.
				</p>


				<div className="mt-2 flex w-full items-center justify-left pt-3 pb-5">
				<Link href={"https://forms.gle/YKMAhqrjfTVbN3H47"} target="_blank" rel="noopener noreferrer">
					<Button variant={"outline"} size={"sm"} className="px-10 md:px-10 py-5 md:py-5 md:text-2xl flex items-center space-x-3" style={{ backgroundColor: '#ff6347' }}>

					<Image 
						src="/img/logo/acmlogo.png" 
						alt="ACM Logo"
						width={24} 
						height={24} 
					/>
					<span>Visit ACM's HackKit!</span>
					</Button>
				</Link>
				</div>


				<div className="max-h-[50px] overflow-hidden mt-2">
					<Link
						href={"https://vercel.com/?utm_source=ACM%20UTSA&utm_campaign=oss"} target="_blank" rel="noopener noreferrer"
					>
						<img
							src="/img/powered-by-vercel.svg"
							alt="Powered by Vercel"
							className="overflow-hidden rounded-lg border border-[#5D5D5D] bg-black"
						/>
					</Link>
				</div>

			</div>

			{/* Right side: Resources, Socials, and Other Organizations */}
			<div className="flex flex-wrap justify-between w-full md:w-2/3 mt-6 md:mt-0">
				{/* Column 1: Participant Resources */}
				<div className="flex flex-col w-1/3">
					<h3 className="text-lg font-bold">Participant Resources</h3>
					<ul className="mt-2 space-y-2">
						<li>
							<Link href="https://rowdycon.notion.site/Guide-56f8318aeea7461bac459ae3fbc02273" target="_blank" rel="noopener noreferrer">Guide</Link>
						</li>
						<li>
							<Link href="https://rowdycon.notion.site/Schedule-daa0ea305ea34133ac68e517e185ea41?pvs=4" target="_blank" rel="noopener noreferrer">Schedule</Link>
						</li>
						<li>
							<Link href="https://rowdycon.notion.site/Code-of-Conduct-109850364be780f08848c4ed85aa4047" target="_blank" rel="noopener noreferrer">Code of Conduct</Link>
						</li>
					</ul>
				</div>

				{/* Column 2: Socials */}
				<div className="flex flex-col w-1/3">
					<h3 className="text-lg font-bold">Socials</h3>
					<div className="flex space-x-4 mt-2">
						<Link href="https://www.instagram.com/rowdyconutsa" target="_blank" rel="noopener noreferrer">
							<Instagram className="h-6 w-6" />
						</Link>
						<Link href="https://x.com/i/flow/login?redirect_after_login=%2Frowdyconutsa" target="_blank" rel="noopener noreferrer">
							<Twitter className="h-6 w-6" />
						</Link>
						<Link href="https://github.com/rowdycon" target="_blank" rel="noopener noreferrer">
							<Github className="h-6 w-6" />
						</Link>
						<Link href="https://www.linkedin.com/company/utsa-rowdycon" target="_blank" rel="noopener noreferrer">
							<Linkedin className="h-6 w-6" />
						</Link>
						<Link href="https://discord.gg/VMdStE3mpd" target="_blank" rel="noopener noreferrer">
            			<Image
              			src="/img/discord.svg" // Ensure this path points to your `discord.svg` file in the `public` folder
              			alt="Discord"
              			width={24}
              			height={24}
              			className="h-6 w-6 invert" // Same size as other icons
            			/>
          				</Link>
					</div>
				</div>

				{/* Column 3: Other Organizations */}
				<div className="flex flex-col w-1/3">
					<h3 className="text-lg font-bold">Other Organizations</h3>
					<ul className="mt-2 space-y-2">
						<li>
							<Link href="https://rowdylink.utsa.edu/organization/comptiastudentchapter" target="_blank" rel="noopener noreferrer">CompTIA Student Chapter</Link>
						</li>
						<li>
							<Link href="https://rowdylink.utsa.edu/organization/computersecurityassociation" target="_blank" rel="noopener noreferrer">Computer Security Association</Link>
						</li>
						<li>
							<Link href="https://rowdylink.utsa.edu/organization/wicysutsa" target="_blank" rel="noopener noreferrer">Women in Cyber Security at UTSA</Link>
						</li>
						<li>
							<Link href="https://rowdylink.utsa.edu/organization/cyberjedis" target="_blank" rel="noopener noreferrer">Cyber Jedis</Link>
						</li>

						<li>
							<Link href="https://rowdylink.utsa.edu/organization/console-cowboys" target="_blank" rel="noopener noreferrer">Console Cowboys</Link>
						</li>

						<li>
							<Link href="https://rowdylink.utsa.edu/organization/ocsa" target="_blank" rel="noopener noreferrer">Online Cyber Security Alliance</Link>
						</li>

						<li>
							<Link href="https://rowdylink.utsa.edu/organization/acm" target="_blank" rel="noopener noreferrer">Association for Computing Machinery</Link>
						</li>

					</ul>
				</div>
			</div>
		</footer>
	);
}

