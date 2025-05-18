import { PrimaryYellowButton } from "@/utils/buttons/PrimaryYellowButton"
import { RightArrowButton } from "@/utils/buttons/RightArrowButton"
import { GiHiveMind } from "react-icons/gi";
import Image from "next/image"
import { images } from "@/utils/images/images";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { BsTranslate } from "react-icons/bs";
import { FaBrain } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
const data = [
    {
        icon: <FaPersonCircleCheck className="w-10 h-10"/>,
        label:"Bias-Free Evaluation",
        description:"Delivers data backend insights that reduce hiring bias and enhance fairness."
    },
    {
        icon: <FaBrain className="w-10 h-10"/>,
        label:"Expertise Depth Evaluation",
        description:"NLP algoriths extract and score domain knowledgr and technical fluency in real time."

    },
    {
        icon: <BsTranslate className="w-10 h-10"/>,
        label:"AI-Assisted Behavioral Insights",
        description:"Natual Language Processing analyzes video interview responses to assess personality traits."

    },
    {
        icon: <MdManageAccounts className="w-10 h-10"/>,
        label:"Behavioral Fit Mapping",
        description:"Matches candidates to roles based on cognitive, interpersonal, and cultural alignment."
    }
]
export const TalentPersona = () => {
    return (
        <section className="p-6 bg-white text-gray-800 rounded-b-lg shadow-md">
            <div className="bg-gray-900 text-white rounded-lg flex justify-between items-center px-6 py-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                    <GiHiveMind/> Cognitive NLP-Processed Talent Persona
                </h2>
                <div className="">
                        <RightArrowButton/>
                </div>
                
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between mt-6 gap-6 w-full ">
                <div className="rounded-lg overflow-hidden w-full lg:w-1/2">
                    <div className="aspect-[4/3 relative w-full h-full max-h-[400px]">
                             <Image 
                                src={images.talentPersona}
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
                            <h3 className="text-lg font-semibold mb-1">{card.label}</h3>
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