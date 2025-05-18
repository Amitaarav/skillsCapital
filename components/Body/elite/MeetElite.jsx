import { PrimaryYellowButton } from "@/utils/buttons/PrimaryYellowButton"
import { CardComponent } from "./CardComponent"
const eliteDetails = [
    {
        id:"1",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShR3DDRL72-D8KbtAKEEAngJG3vQXft_hG1w&s",
        role:"SAP FICO Consultant",
        JDMatchPercentage:94,
        Persona:"Analytcal, structures, risk-aware",
        Availability:"immediate",
        Domain:"BFSI, Manufacturing",
        Experience:6,
        ReferenceScore:"4.8/5",
        GlobalClients:3,
        Readiness: 48

    },
    {
        id:"2",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyFFsStl16P759odx6-2hWHlsEPdLnJd46uw&s",
        role:"SAP MM / Ariba Consultant",
        JDMatchPercentage:98,
        Persona:"Fastlearner, Ccollaborative",
        Availability:"immediate",
        Domain:"Pharma, Retail",
        Experience:8,
        ReferenceScore:"4.6/5",
        GlobalClients:3,
        Readiness: 24

    },
    {
        id:"3",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRanytcVg4kgxoPQRuhQSCmA0GSOoCWm9FVMQ&s",
        role:"SAP FICO Consultant",
        JDMatchPercentage:94,
        Persona:"Analytcal, structures, risk-aware",
        Availability:"immediate",
        Domain:"BFSI, Manufacturing",
        Experience:6,
        ReferenceScore:"4.8/5",
        GlobalClients:3,
        Readiness: 48

    },

]
export const MeetElite = () => {
    return (
        <div className="flex justify-center items-center flex-col bg-gradient-to-tl from-gray-800 via-gray-850 to-blue-950 mt-4 shadow-lg">
            <h1 className="text-5xl font-bold text-gray-100 mt-4">Meet Our Elite SAP Experts</h1>
            <p className="text-gray-200">Seleced experts with knoeledge and a history of successful delivery.</p>
            <div className="flex justify-center items-center flex-col mt-2">
                <div className="max-w-7xl mx-auto m-4 text-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 p-4">
                    {eliteDetails.map((item) => (<CardComponent key={item.id} image={item.img} role={item.role} jdMatch={item.JDMatchPercentage} persona={item.Persona} availability={item.Availability} domain={item.Domain} experience={item.Experience} referenceScore={item.ReferenceScore} globalClients={item.GlobalClients} readiness={item.Readiness} />))}
                </div>
            </div>
            <div className="mb-8">
                    <PrimaryYellowButton label="View More SAP Consultants" />
            </div>
            
        </div>
    )
}