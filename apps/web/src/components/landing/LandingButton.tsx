import { getUser } from "db/functions";
import { auth } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../shadcn/ui/button";
export default async function LandingButton(){
  const { userId } = auth();

  if (!userId){
    return (
		<div className="grid grid-cols-1">
			<div className="flex h-full w-full flex-col items-center gap-x-4 space-y-2 md:space-y-0 md:flex-row">
				<Link href={"/register"}>
					<Button
						variant={"outline"}
						size={"lg"}
						className="px-10 py-5 text-xl md:px-20 md:py-10 md:text-2xl"
						style={{ backgroundColor: "#ff6347" }}
					>
						Register Now!
					</Button>
				</Link>
				<Link href={"/sign-in"} className="w-full md:w-auto">
					<Button
						variant={"outline"}
						size={"lg"}
						className="px-10 py-5 text-xl md:px-20 md:py-10 md:text-2xl w-full"
						style={{ backgroundColor: "#ff6347" }}
					>
						Sign In
					</Button>
				</Link>
			</div>
		</div>
	);
  }

  const user = await getUser(userId);

  if (!user){
    return (
		<Link href={"/register"}>
			<Button
				variant={"outline"}
				size={"lg"}
				className="px-10 py-5 text-xl md:px-20 md:py-10 md:text-2xl"
				style={{ backgroundColor: "#ff6347" }}
			>
				Complete Registration
			</Button>
		</Link>
	);
  }

  return (
		<Link href={"/dash"}>
			<Button
				variant={"outline"}
				size={"lg"}
				className="px-10 py-5 text-xl md:px-20 md:py-10 md:text-2xl"
				style={{ backgroundColor: "#ff6347" }}
			>
				Dashboard
			</Button>
		</Link>
  );

  

}