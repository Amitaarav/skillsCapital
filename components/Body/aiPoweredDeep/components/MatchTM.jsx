import { PrimaryYellowButton } from "@/utils/buttons/PrimaryYellowButton"
import { RightArrowButton } from "@/utils/buttons/RightArrowButton"
import { BadgeCheck, BrainCog, SearchCheck, Users } from "lucide-react"
import Image from "next/image"
export const data = [
    {
        icon: <BadgeCheck className="w-6 h-6"/>,
        label:"Continuously Learning Models",
        description:"Matching algoriths evollve with every project, improving accuracy over time."
    },
    {
        icon:<SearchCheck className="w-6 h-6"/>,
        label:"Trained on Real-World Data",
        description:"Models are trained on 20,000+ consultant profiles and 1,000+ client project outcomes."

    },
    {
        icon:<BrainCog className="w-6 h-6"/>,
        label:"AI-Powered Precision",
        description:"Instantly identifies best-fit SAP consultants using advanced AI/ML algorithms."

    },
    {
        icon:<Users className="w-6 h-6"/>,
        label:"Optimizes for Enterprise Needs",
        description:"Ensure high-relevance matches tailored to complex SAP delivery environments."
    }
]
export const MatchTM = () => {
    return (
        <section className="p-6 bg-white text-gray-800 rounded-lg shadow-md">
            <div className="bg-gray-900 text-white rounded-lg flex justify-between items-center px-6 py-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                    Advanced ML-Powered Precision MatchTM
                </h2>
                <div className="">
                        <RightArrowButton/>
                </div>
                
            </div>
            <div className="flex items-center justify-between mt-4 gap-2">
                <div className="rounded-lg overflow-hidden w-1/2">
                    <Image 
                    alt="MatchTM Image"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6GXum3mNhbslVmgPYiO4kAACe05bfndIhQg&s"
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
                <PrimaryYellowButton label="Explore Our Vetting Process"/>
            </div>
        </section>
    )
}