import { PrimaryYellowButton } from "@/utils/buttons/PrimaryYellowButton"
import { RightArrowButton } from "@/utils/buttons/RightArrowButton"
import { GiTechnoHeart } from "react-icons/gi";
import { images } from "@/utils/images/images";
import { MdEngineering, MdAssessment  } from "react-icons/md";
import { RiCheckboxMultipleFill } from "react-icons/ri";
import { AiFillReconciliation } from "react-icons/ai";
import Image from "next/image"
const data = [
    {
        icon: <MdEngineering className="w-10 h-10"/>,
        label:"End-to-End Fit Scoring",
        description:"Combines all layers into a unifies candidate readiness score for decision-making."
    },
    {
        icon: <MdAssessment className="w-10 h-10"/>,
        label:"AI-Powered Matching",
        description:"Machine learning algoriths analyze SAP resumes and jobs descriptions to ensure precise skill alignment."

    },
    {
        icon: <RiCheckboxMultipleFill className="w-10 h-10"/>,
        label:"Verified by External Assessments",
        description:"Third-party evaluations validates code skills across SAP,ERP,and enterprise technologies."

    },
    {
        icon: <AiFillReconciliation className="w-10 h-10"/>,
        label:"Human Insights for Cultural Fit",
        description:"industry experts assess soft skills and team compatibility for enterprise-ready placements"
    }
]
export const DeepVet = () => {
    return (
            <section className="p-6 bg-white text-gray-800  shadow-md">
                <div className="bg-gray-900 text-white rounded-lg flex justify-between items-center px-6 py-4">
                    <h2 className="text-lg font-semibold flex items-center gap-2">
                        <GiTechnoHeart/> Deep Tech AI-Driven Deep Vet
                    </h2>
                    <div className="">
                            <RightArrowButton/>
                    </div>
                    
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-between mt-6 gap-6 w-full ">
                    <div className="rounded-lg overflow-hidden w-full lg:w-1/2">
                        <div className="aspect-[4/3 relative w-full h-full max-h-[400px]">
                                 <Image 
                                    src={images.deepVet}
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