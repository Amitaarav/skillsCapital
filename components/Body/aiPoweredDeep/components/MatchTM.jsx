import { PrimaryYellowButton } from "@/utils/buttons/PrimaryYellowButton"
import { RightArrowButton } from "@/utils/buttons/RightArrowButton"
import { BadgeCheck, BrainCog, SearchCheck, Users } from "lucide-react"
import { GiLevelFourAdvanced } from "react-icons/gi";
import { GiPuzzle,GiWorld } from "react-icons/gi";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import Image from "next/image"
import { images } from "@/utils/images/images";
export const data = [
    {
        icon: <GiPuzzle className="w-10 h-10"/>,
        label:"Continuously Learning Models",
        description:"Matching algoriths evollve with every project, improving accuracy over time."
    },
    {
        icon: <GiWorld className="w-10 h-10"/>,
        label:"Trained on Real-World Data",
        description:"Models are trained on 20,000+ consultant profiles and 1,000+ client project outcomes."

    },
    {
        icon: <MdOutlinePrecisionManufacturing className="w-10 h-10"/>,
        label:"AI-Powered Precision",
        description:"Instantly identifies best-fit SAP consultants using advanced AI/ML algorithms."

    },
    {
        icon: <HiBuildingOffice2 className="w-10 h-10"/>,
        label:"Optimizes for Enterprise Needs",
        description:"Ensure high-relevance matches tailored to complex SAP delivery environments."
    }
]
export const MatchTM = () => {
    return (
            <section className="p-6 bg-white text-gray-800 rounded-t-lg shadow-md">
                <div className="bg-gray-900 text-white rounded-lg flex justify-between items-center px-6 py-4">
                    <h2 className="text-lg font-semibold flex items-center gap-2">
                        <GiLevelFourAdvanced/> Advanced ML-Powered Precision MatchTM
                    </h2>
                    <div className="">
                            <RightArrowButton/>
                    </div>
                    
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-between mt-6 gap-6 w-full ">
                    <div className="rounded-lg overflow-hidden w-full lg:w-1/2">
                        <div className="aspect-[4/3 relative w-full h-full max-h-[400px]">
                                 <Image 
                                    src={images.matchTM}
                                    alt="Talent Persona Image"
                                    width={800}
                                    height={600}
                                    className=" rounded-lg object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                                    />
                        </div>
                       
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-1/2">
                        {data.map((card,index) => (
                            <div
                            key={index}
                            className="p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
                            >
                                <div className="mb-2">{card.icon}</div>
                                <h3 className="text-lg font-semibold mb-2">{card.label}</h3>
                                <p className="text-gray-600 text-sm">{card.description}</p>
    
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-6 flex justify-center text-center">
                    <PrimaryYellowButton label="Discover Our Vetting Process"/>
                </div>
            </section>
        )
}