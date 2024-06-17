import Jobs from "@/components/Jobs";
import React from "react";

function Careers() {
	return (
		<div className="p-5  mt-4 mb-12">
			<div className="flex flex-col items-center justify-center">
				<img
					src="/team.png"
					className="w-32 h-32 object-cover rounded-full shadow-lg shadow-yellow-100"
                />
                <h1 className="pt-8 text-2xl font-semibold text-black">Join Our Team <span className="text-base linear-text-gradient1 ml-3">We're Hiring</span></h1>
                <p className="pt-4 text-gray-500  max-w-md text-center">
                A global team of top-tier creatives , where talent knows no borders. We pride ourselves on recruiting only the coolest and most skilled individuals
                
                </p>
                <a className="text-blue-500 underline pt-4 font-semibold" href="https://www.linkedin.com/company/jobscoutwork/?originalSubdomain=in" target="_blank">Company Info</a>
            </div>
            
            <Jobs/>
		</div>
	);
}

export default Careers;
