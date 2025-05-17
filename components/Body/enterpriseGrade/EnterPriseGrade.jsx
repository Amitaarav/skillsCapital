import { Binoculars,ShieldCheck,ArrowDownUp  } from "lucide-react"
const data = [
    {
        icon:<Binoculars className="w-6 h-6"/>,
        heading:"Instant Matching",
        description:"Smart AI-driven selection of the top 1% of SAP consultants."
    },
    {
        icon:<ShieldCheck className="w-6 h-6"/>,
        heading:"Guaranteed Quality",
        description:"All consultants undergo a thorough vetting process prior to deployment."
    },
    {
        icon:<ArrowDownUp className="w-6 h-6"/>,
        heading:"Seamless Replacement",
        description:"Get a new consultant within 24 hours if needed."
    }
]
export const EnterPriseGrade = () => {
    return (
        <div className=" bg-gradient-to-l m-8 from-bgray-900 to-gray-500 rounded-t-2xl p-4">
            <h1 className="text-black font-bold text-center text-4xl">Enterprise-Grade SAP Talent in 48 hours</h1>
            <p className="text-sm font-medium text-center">No Compromise on Quality</p>
            <div className="flex flex-col md:flex-row gap-4">
                {data.map((card,index) => (
                    <div
                    key={index}
                    className="p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
                    >
                        <div className="mb-2">{card.icon}</div>
                        <h3 className="text-lg font-semibold mb-1">{card.heading}</h3>
                        <p className="text-gray-600">{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}