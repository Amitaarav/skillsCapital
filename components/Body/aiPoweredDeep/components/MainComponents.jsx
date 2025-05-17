import { DeepVet } from "./DeepVet";
import { MatchTM } from "./MatchTM";
import { TalentPersona } from "./TalentPersona";
export const MainComponent = () =>{
    return (
        <div className="bg-gray-100">
            <div className="flex justify-center items-center flex-col  gap-4 p-4">
                <h1 className="text-black font-bold text-4xl">AI-Powered Deep Vet 360</h1>
                <p className="text-gray-500 font-sm">Precision Hiring at Scale</p>
            </div>
            <div className="mr-8 ml-8">
                    <MatchTM/>
                    <DeepVet/>
                    <TalentPersona/>
            </div>
            
        </div>
    )
}