"use client"
import { useState,useEffect } from "react";
import { FilterPanel } from "./FilterPanel"
import { experienceData } from "@/utils/experienceData";
import { ExperienceCard } from "./ExperienceCard";
import { motion } from "framer-motion";
export const MainExperienceComponent = () =>{
    const [filter, setFilter] = useState({propertyType: "All Property", year: "All Year", location: "All location Available"});
    const [filterData, setFilterData] = useState([]);

    useEffect(()=>{
        let responseData = experienceData;
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
        <div className=" font-sans bg-gradient-to-l m-8 bg-blue-950 p-4 min-h-screen rounded-lg shadow-lg ">
            <h1 className="text-4xl text-gray-200 font-bold mb-6 text-center">
                Hospitality Experience
            </h1>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full sticky top-0 md:w-1/3"> 
                    <FilterPanel filter={filter} setFilter={setFilter}/>
                </div>
                <motion.div 
                    layout
                    className=" bg-gray-400 w-full md:w-2/3 rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20 max-h-[75vh] overflow-y-auto pr-2 p-4">
                        {
                        filterData.length > 0 ?
                        (filterData.map((data) => <ExperienceCard key={data.id} data={data}/>))
                        :
                        (
                            <p className="text-center text-gray-600 text-lg col-span-full">No Matching Data Found</p>
                        )
                    }
                </motion.div>
            </div>
        </div>
    )
}