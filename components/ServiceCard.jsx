import Image from "next/image";
import React from "react";

export default function ServiceCard({
  icon,
  service,
  description,
  iconSecondary,
}) {
  return (
    <div className="flex flex-col justify-center items-center max-w-[250px] text-center gap-6">
      <div
        className={`w-24 h-24 ${
          iconSecondary ? "bg-pink-50" : "bg-white"
        }  rounded-full flex justify-center items-center`}
      >
        <Image width="30" height="30" src={icon} alt="service" />
      </div>
      <h4 className="text font-semibold text-black">{service}</h4>
      <p className="text text-[14px]">{description}</p>
    </div>
  );
}
