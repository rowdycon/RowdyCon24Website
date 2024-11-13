import Image from "next/image";
import Link from "next/link";
import { Button } from "../shadcn/ui/button";
import { Suspense } from "react";
import LandingButton from "./LandingButton";
import { Skeleton } from "../shadcn/ui/skeleton";
export default function Hero() {
	return (
		<section className="grid w-full grid-cols-1 overflow-hidden">
			<div className="relative flex min-h-screen w-full flex-col items-center justify-center">
				<div className="absolute left-[20%] top-[-30vh] h-[110vh] w-[225px] -translate-x-5 -rotate-[50deg] bg-white opacity-20 blur-3xl"></div>
				<div className="relative">
					<div className="absolute h-full w-full rounded-3xl bg-hackathon opacity-10 blur-3xl"></div>
					<div className="z-10 flex h-min flex-col items-center justify-center gap-4 md:flex-row">
						<div className="relative mx-auto h-[250px] w-[250px] md:h-[400px] md:w-[400px]">
							<Image
								src="/img/logo/rowdyconlogo.png"
								alt="RowdyCon Logo"
								fill
								className="object-contain"
							/>
						</div>
						<div className="z-10 flex flex-col items-center text-center md:items-start md:space-y-3 md:text-left">
							<h1 className="text-4xl font-black text-hackathon dark:bg-gradient-to-tl dark:from-hackathon/80 dark:to-white dark:bg-clip-text dark:text-transparent md:text-7xl">
								<span style={{ color: "#ff6347" }}>
									Nov. 16th
								</span>
							</h1>
							<div className="relative h-[100px] w-[300px] md:h-[150px] md:w-[500px]">
								<Image
									src="/img/logo/rowdyconTextLogo.png"
									alt="RowdyCon Text Logo"
									fill
									className="object-contain"
								/>
							</div>
							<p className="text-xl md:text-4xl text-[#ff6347] font-bold text-muted-foreground">
									@ UTSA San Pedro I and Online
							</p>
						</div>
					</div>
				</div>
				{/*old, change it to this when removing the CFW button after it closes: mt-2 flex w-full items-center justify-center */}
				<div className="mt-4 md:mt-0 flex w-full flex-col items-center justify-center space-y-4">
					{" "}
					{/* Reduced margin here */}
					<Suspense
						fallback={
							<Link href={"/register"}>
								<Button
									variant={"outline"}
									size={"lg"}
									className="px-10 py-5 text-xl md:px-20 md:py-10 md:text-2xl"
									style={{ backgroundColor: "#ff6347" }}
								>
									<Skeleton className="h-12 w-12 rounded-full" />
								</Button>
							</Link>
						}
					>
						<LandingButton />
					</Suspense>
					{/* CFW Button. Remove when closed. */}
					{/*}
					<Link href={"https://forms.gle/VFUZ25dLLn9UsWkt6"}>
						<Button
							variant={"outline"}
							size={"lg"}
							className="px-10 py-5 text-xl md:px-20 md:py-10 md:text-2xl"
							style={{ backgroundColor: "#ff6347" }}
						>
							Present a Workshop
						</Button>
					</Link>*/}

					{/* CTF Button. Remove when closed. */}
					<Link href={"https://ctf.rowdycon.org"}>
						<Button
							variant={"outline"}
							size={"lg"}
							className="px-10 py-5 text-xl md:px-20 md:py-10 md:text-2xl"
							style={{ backgroundColor: "#ff6347" }}
						>
							Go to the CTF!
						</Button>
					</Link>


				</div>
			</div>
		</section>
	);
}



