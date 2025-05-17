import { PrimaryYellowButton } from "@/utils/buttons/PrimaryYellowButton"
import { RightArrowButton } from "@/utils/buttons/RightArrowButton"
import { BadgeCheck, BrainCog, SearchCheck, Users } from "lucide-react"
import Image from "next/image"
const data = [
    {
        icon: <BadgeCheck className="w-6 h-6"/>,
        label:"End-to-End Fit Scoring",
        description:"Combines all layers into a unifies candidate readiness score for decision-making."
    },
    {
        icon:<SearchCheck className="w-6 h-6"/>,
        label:"AI-Powered Matching",
        description:"Machine learning algoriths analyze SAP resumes and jobs descriptions to ensure precise skill alignment."

    },
    {
        icon:<BrainCog className="w-6 h-6"/>,
        label:"Verified by External Assessments",
        description:"Third-party evaluations validates code skills across SAP,ERP,and enterprise technologies."

    },
    {
        icon:<Users className="w-6 h-6"/>,
        label:"Human Insights for Cultural Fit",
        description:"industry experts assess soft skills and team compatibility for enterprise-ready placements"
    }
]
export const DeepVet = () => {
    return (
        <section className="p-6 bg-white text-gray-800 rounded-lg shadow-md">
            <div className="bg-gray-900 text-white rounded-lg flex justify-between items-center px-6 py-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                    Deep Tech AI-Driven Deep Vet
                </h2>
                <div className="">
                        <RightArrowButton/>
                </div>
                
            </div>
            <div className="flex items-center justify-between mt-4 gap-2">
                <div className="rounded-lg overflow-hidden w-1/2">
                    <Image 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmE1_YPCP4kpciISI-BDuyY_1ebUqJFknzcw&s"
                    alt="Deep Vet Image"
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover"
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {data.map((card,index) => (
                        <div
                        key={index}
                        className="p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="mb-2">{card.icon}</div>
                            <h3 className="text-lg font-semibold mb-1">{card.label}</h3>
                            <p className="text-gray-600 text-sm">{card.description}</p>

                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-6 flex justify-center text-center">
                <PrimaryYellowButton label="Our Candidate Vetting Process"/>
            </div>
        </section>
    )
}