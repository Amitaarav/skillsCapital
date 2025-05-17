import { RightArrowButton } from "@/utils/buttons/RightArrowButton";
import { IconsAIPoweredComp } from "@/utils/icons/IconsAIPoweredComp";
import { Puzzle } from "lucide-react";

const headigs = [
    {
        icon:IconsAIPoweredComp.puzzle,
        label:"Advanced ML-Powered Precision MatchTM"
    },
    {
        icon:IconsAIPoweredComp.settings,
        label:"Deep Tech AI-Driven Deep Vet"
    },
    {
        icon:IconsAIPoweredComp.cog,
        label:"Cognitive NLP-Processed Talent Persona"

    }
]
export const TopHeading = ({item}) => {
    return (
        <div className="bg-gray-900 text-white p-4">
            <div>
                {item.icon}
            </div>
            <div>
                <h1>{item.heading}</h1>
            </div>
            <RightArrowButton/>
        </div>
    )
}