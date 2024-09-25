import partnerData from "./partners.json";
import PartnerCard from "./PartnerCard";
import Image from "next/image";

type Partner = {
	name: string;
	logo: string;
	url: string;
	tier: string;
};

export default function Partners() {
	return (
	  <section className="flex flex-col items-center justify-center w-full py-10">
		<h1 className="text-4xl font-bold mb-8">Our Partners</h1>
		<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 place-items-center w-full max-w-7xl mx-auto">
		  {partnerData.partners.map((partner) => (
			<PartnerCard key={partner.name} partner={partner} />
		  ))}
		</div>
	  </section>
	);
  }
  