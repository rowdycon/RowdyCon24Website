import Image from "next/image";
import Link from "next/link";
import { Button } from "../shadcn/ui/button";

export default function Hero() {
	return (
		<section className="grid w-full grid-cols-1 overflow-hidden">
			<div className="relative flex min-h-screen w-full flex-col items-center justify-center">
				<div className="absolute left-[20%] top-[-30vh] h-[110vh] w-[225px] -translate-x-5 -rotate-[50deg] bg-white opacity-20 blur-3xl"></div>
				<div className="relative">
					<div className="absolute h-full w-full rounded-3xl bg-hackathon opacity-10 blur-3xl"></div>
					<div className="z-10 grid h-min grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-0">
						<div className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px]">
							<Image
								src="/img/logo/rowdyconlogo.png"
								alt="RowdyCon Logo"
								fill
								className="object-contain"
							/>
						</div>
						<div className="z-10 flex flex-col items-center md:items-start text-center md:text-left space-y-2 md:space-y-3">
							<h1 className="text-4xl md:text-7xl font-black text-hackathon dark:bg-gradient-to-tl dark:from-hackathon/80 dark:to-white dark:bg-clip-text dark:text-transparent">
								<span style={{ color: "#ff6347" }}>Nov. 16th</span>
							</h1>
							<div className="relative w-[300px] h-[100px] md:w-[500px] md:h-[150px]">
								<Image
									src="/img/logo/rowdyconTextLogo.png"
									alt="RowdyCon Text Logo"
									fill
									className="object-contain"
								/>
							</div>
							<p className="text-lg md:text-md font-bold text-muted-foreground">
								<span style={{ fontSize: "2rem", color: "#ff6347" }}>
									@ UTSA San Pedro I
								</span>
							</p>
						</div>
					</div>
				</div>
				<div className="mt-2 flex w-full items-center justify-center"> {/* Reduced margin here */}
				<Link href={"https://rowdycon.org/register"}>
					<Button variant={"outline"} size={"lg"} className="px-10 md:px-20 py-5 md:py-10 text-xl md:text-2xl" style={{ backgroundColor: '#ff6347' }}>
						REGISTER HERE!
					</Button>
				</Link>
			</div>
			</div>
		</section>
	);
}



