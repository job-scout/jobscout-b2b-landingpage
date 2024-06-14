import Image from "next/image";
import React from "react";

export default function ServiceCard({
  icon,
  service,
  description,
  iconSecondary,
}) {
  return (
    <div className="flex flex-col justify-center items-center max-w-[280px] text-center gap-6">
      <div
        className={`w-24 h-24 ${
          iconSecondary ? "" : "bg-white"
        }  rounded-full flex justify-center items-center`}
      >
        <img className="w-auto h-auto" src={icon} alt="service" />
      </div>
      <h4 className="text-lg font-semibold text-black">{service}</h4>
      <p className="text text-sm">{description}</p>
    </div>
  );
}
