import { ArrowRight } from "lucide-react"
export const PrimaryYellowButton = ({label}) => {
    return(
        
            <div >
            <button className="bg-orange-600 hover:bg-orange-400 rounded-full px-4 py-2 text-white flex items-center cursor-pointer">
                <span className="mr-3 text-white font-medium">{label}</span>
                <div className="w-4 h-4">
                    <ArrowRight className="w-6 h-4 text-white" />
                </div>
            </button>

            </div>
        
    )
}
