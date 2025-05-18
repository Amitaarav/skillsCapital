import Image from "next/image"
import { SecondaryBlackButton } from "@/utils/buttons/SecondaryBlackButtons"
export const CardComponent = ({ image,role, jdMatchPercentage, persona, availability, domain, experience, referenceScore, globalClients, readiness}) => {
    return(
        <div className="w-80 h-150 bg-white rounded-xl shadow-md overflow-hidden border-white flex flex-col justify-between min-h-[400px] ">
            <div className="relative h-56 overflow-hidden bg-gradient-to-r from-blue-900 to-gray-400 flex items-center">
                <Image
                alt="Card image"
                width={200}
                height={300}
                src={image}
                className="absolut inset-0 object-cover rounded-tl-2xl h-full  p-2 hover:scale-105 transition-transform duration-300 ease-in-out" 
                />
            </div>
            <div className="m-4">
                <p className="text-gray-900 font-semibold">
                    Role: {role}
                </p>
                <p className="text-gray-700 mt font-semibold">
                    JD Match: {jdMatchPercentage}%
                </p>
                <div className="w-full bg-gray-200 rounded h-4 mb-4">
                    <div className="bg-green-500 h-4 rounded"
                    style={{width: `${jdMatchPercentage}%`}}
                    >
                        
                    </div>
                </div>
                <ul className="text-gray-700 space-y-1 ">
                    <li><strong>Persona: </strong>{persona}</li>
                    <li><strong>Availability: </strong>{availability}</li>
                    <li><strong>Domain Fit: </strong>{domain}, {experience}+ years</li>
                    <li><strong>Reference Score: </strong>{referenceScore} based on {globalClients} global clients</li>
                    <li><strong>Readiness: </strong>Ready in {readiness} hours</li>
                </ul>
            </div>  
            <div className="flex justify-center pb-2">
                    <SecondaryBlackButton label={"View Full Persona Report"}/>
            </div>
        </div>
    )
}