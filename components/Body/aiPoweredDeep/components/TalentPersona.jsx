import { PrimaryYellowButton } from "@/utils/buttons/PrimaryYellowButton"
import { RightArrowButton } from "@/utils/buttons/RightArrowButton"
import { BadgeCheck, BrainCog, SearchCheck, Users } from "lucide-react"
import Image from "next/image"
const data = [
    {
        icon: <BadgeCheck className="w-6 h-6"/>,
        label:"Bias-Free Evaluation",
        description:"Delivers data backend insights that reduce hiring bias and enhance fairness."
    },
    {
        icon:<SearchCheck className="w-6 h-6"/>,
        label:"Expertise Depth Evaluation",
        description:"NLP algoriths extract and score domain knowledgr and technical fluency in real time."

    },
    {
        icon:<BrainCog className="w-6 h-6"/>,
        label:"AI-Assisted Behavioral Insights",
        description:"Natual Language Processing analyzes video interview responses to assess personality traits."

    },
    {
        icon:<Users className="w-6 h-6"/>,
        label:"Behavioral Fit Mapping",
        description:"Matches candidates to roles based on cognitive, interpersonal, and cultural alignment."
    }
]
export const TalentPersona = () => {
    return (
        <section className="p-6 bg-white text-gray-800 rounded-lg shadow-md">
            <div className="bg-gray-900 text-white rounded-lg flex justify-between items-center px-6 py-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                    Cognitive NLP-Processed Talent Persona
                </h2>
                <div className="">
                        <RightArrowButton/>
                </div>
                
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between mt-6 gap-6 w-full ">
                <div className="rounded-lg overflow-hidden w-full lg:w-1/2">
                    <div className="h-full">
                             <Image 
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQckNutgW1aiHkY6fSzA_ce6E2TVbpAkOo_yw&s"
                                alt="Talent Persona Image"
                                width={800}
                                height={600}
                                className="w-full h-full rounded-lg object-cover"
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