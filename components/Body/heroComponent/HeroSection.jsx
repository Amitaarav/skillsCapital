import Image from "next/image"
import { PrimaryYellowButton } from "@/utils/buttons/PrimaryYellowButton"
import { SimpleButton } from "@/utils/buttons/SimpleButton"

export const HeroSection =() =>{
    return (
        <div className="relative px-4 sm:px-6 lg:px-8 py-16 w-full h-full overflow-hidden ">
            <div className="flex items-start justify-left pl-20">
                <div className="absolute inset-0 z-0  w-full h-full">
                    <Image
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdTPPWvUI7rQ-WjTjY8IbcWSD7xp2UAXwcPA&s"
                        alt="Hero Background"
                        layout="fill"
                        className="z-0 w-full h-3/4 object-cover"
                    />
                </div>
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-900 to-gray-600 opacity-80"/>
                <div className="relative z-10 max-w-6xl max-auto text-left sm:px-6 lg:px-8 mt-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-bold text-white gap-4">
                        Unleash SAP & Tech <br />Excellence with AI/ML Talent Cloud
                    </h1>
                    <p className="text-gray-200 mt-10 mb-10 max-w-2xl md:items-center">
                        Find and deploy elite SAP conultants, managed teams, and consulting expertise instantly with AI-driven precision
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mb-12 text-left text-sm md:text-base text-white -m-2">
                        <div className="flex flex-col items-start md:items-center border-r-2 border-gray-500">
                            <h2 className="font-bold text-xl ">20,000+</h2>
                            <p className="text-gray-300 text-left md:text-center">Vetted SAP Tech Consultants</p>

                        </div>
                        <div className="flex flex-col items-start md:items-center border-r-2 border-gray-500">
                            <h2 className="font-bold text-xl text-white">1000+</h2>
                            <p className="text-gray-300 text-left md:text-center">Global Clients & SAP Projects</p>
                        </div>
                        <div className="flex flex-col items-start md:items-center border-r-2 border-gray-500">
                            <h2 className="font-bold text-xl text-white">10+ Years</h2>
                            <p className="text-gray-300 text-left md:text-center mr-4">Average Experience per Consultant</p>
                        </div>
                        <div className="flex flex-col items-start md:items-center">
                            <h2 className="font-bold text-xl text-white">20M+</h2>
                            <p className="text-gray-300 text-left md:text-center">Man-Hours of SAP Expertise</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            <div className="relative flex justify-left pl-30 gap-20">
                <PrimaryYellowButton label="Find SAP Experts Now" />
                <SimpleButton label={"Explore Talent Cloud"} />
            </div>
        </div>
        
    )
}