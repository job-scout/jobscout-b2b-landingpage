import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { JOBS_DATA, LOCATION_DATA, TEAMS_DATA } from "../data/CAREERS_DATA";
import { LocateIcon, Map, MapPin, Pin } from "lucide-react";

export default function Jobs() {
  const [data, setData] = useState(JOBS_DATA);
  const [team, setTeam] = useState("All");
  const [location, setLocation] = useState("All");
  const handleTeamChange = (array) => {
    if (team == "All") {
      return array;
    } else {
      return array.filter((e) => team == e.team);
    }
  };
  const handleLocationChange = (array) => {
    if (location == "All") {
      return array;
    } else {
      return array.filter((e) => location == e.location);
    }
  };
  useEffect(() => {
    let JOB = JOBS_DATA;
    JOB = handleTeamChange(JOB);
    JOB = handleLocationChange(JOB);
    setData(JOB);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [team, location]);

  return (
    <section className="items-center my-16 container mx-auto lg:w-[80%] 2xl:w-[70%]">
      <h3 className="text-2xl font-semibold text-black">Open Positions</h3>
      <div className="text-container mb-8">
        <h2 className="heading text-gray-600">
          We are looking for talented people
        </h2>
       
      </div>
      <main className="max-w-[1378px] flex flex-col lg:flex-row w-full gap-5 justify-between p-7 border">
        <div className="flex-[6]">
          <h4 className="text-xl  font-medium text-black">
            Vacancies
            <span className="rounded-full bg-green-500 text-white  px-3 py-1 ml-3">
              {JOBS_DATA.length}
            </span>
          </h4>
        </div>
        <div className="flex gap-5 items-center">
          <label className="text-xl font-medium text-black" htmlFor="team">
            Teams:
          </label>
          <select
            className="border border-[#E0E0E0] rounded-md bg-white w-52 px-2 py-1  "
            id="team"
            name="team"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
          >
            <option value="All">All Team</option>
            {TEAMS_DATA.map((team, index) => (
              <option key={index} value={team}>
                {team}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-5 items-center">
          <label className="text-xl font-medium text-black" htmlFor="team">
            Location:
          </label>
          <select
            className="border border-[#E0E0E0] rounded-md bg-white w-52 px-2 py-1"
            id="location"
            name="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="All">All Locations</option>
            {LOCATION_DATA.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
      </main>
      <div className="w-full flex flex-col items-center gap-5">
        {data.map((job, index) => (
          <div
            key={index}
            className="max-w-[1378px] flex flex-col md:flex-row w-full gap-5 md:items-center justify-between p-7 border"
          >
            <div className="flex flex-col lg:min-w-[400px] lg:max-w-[400px]">
              <h3 className="text-xl font-medium  text-black">{job.name}</h3>
              <p>{job.team}</p>
            </div>
            <div className="flex gap-2  items-center">
              <span className="">
                <MapPin/>
              </span>
              <p className="text">{job.location}</p>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/company/jobscoutwork/?originalSubdomain=in" 
                target="_blank"
              >
                <button className=" bg-primary text-white sublime-light py-2 px-3 rounded-xl font-semibold">
                  View details 
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
