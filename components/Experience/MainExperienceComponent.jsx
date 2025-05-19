"use client"
import { useState,useEffect } from "react";
import { FilterPanel } from "./FilterPanel"
import { experienceData } from "@/utils/experienceData";
import { ExperienceCard } from "./ExperienceCard";
export const MainExperienceComponent = () =>{
    const [filter, setFilter] = useState({propertyType: "All Property", year: "All Year", location: "All location Available"});
    const [filterData, setFilterData] = useState([]);

    useEffect(()=>{
        let responseData = [experienceData];
        if(filter.propertyType !== "All Property"){
            responseData = responseData.filter((data) => data.propertyType === filter.propertyType);
        }
        if(filter.year !== "All Year"){
            responseData = responseData.filter((data) => data.duration === filter.year);
        }
        if(filter.location !== "All location Available"){
            responseData = responseData.filter((data) => data.location === filter.location);
        }
        setFilterData(responseData);

    },
    [filter])
    return (
        <div className="p-4 font-sans bg-gradient-to-bl from-green-200 to-green-800 m-8 rounded-lg shadow-lg">
            <h1 className="text-4xl text-gray-900 font-bold mb-4">
                Hospitality Experience
            </h1>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3">
                    <FilterPanel filter={filter} setFilter={setFilter}/>
                </div>
                <div className=" bg-blue-400 w-full md:w-2/3 rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {filterData.map((data) => (<ExperienceCard key={data.id} data={data}/>))}
                </div>
            </div>
        </div>
    )
}