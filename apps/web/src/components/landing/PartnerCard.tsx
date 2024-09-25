import React from "react";
import Link from "next/link";
import Image from "next/image";

type Partner = {
  name: string;
  logo: string;
  url: string;
  tier: string;
};

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <Link
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center text-center space-y-2"
    >
      {/* Partner Logo */}
      <Image
        src={`/img/logo/${partner.logo}`}
        alt={`${partner.name} logo`}
        width={150} // Adjust size if needed
        height={150}
        className="object-contain"
      />
      {/* Partner Name */}
      <h2 className="text-lg font-semibold">{partner.name}</h2>
    </Link>
  );
}

export default PartnerCard;
