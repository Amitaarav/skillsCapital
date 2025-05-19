import { DeepVet } from "./components/DeepVet";
import { MatchTM } from "./components/MatchTM";
import { TalentPersona } from "./components/TalentPersona";
export const AIPoweredService = () =>{
    return (
        <div className="bg-gray-200">
            <div className="flex justify-center items-center flex-col  p-2">
                <h1 className="text-gray-800 font-bold text-3xl md:text-4xl">AI-Powered Deep Vet 360</h1>
                <p className="text-gray-600 font-sm">Precision Hiring at Scale</p>
            </div>
            <div className="mr-8 ml-8 p-4">
                    <MatchTM/>
                    <DeepVet/>
                    <TalentPersona/>
            </div>
            
        </div>
    )
}