import { FaArrowRightLong } from "react-icons/fa6";
export const PrimaryYellowButton = ({label}) => {
    return(
        
            <div >
            <button className="bg-orange-600 hover:bg-orange-700 rounded-full px-4 py-2 text-white flex items-center cursor-pointer  hover:transform hover:scale-105 hover:transition hover:duration-400 hover:ease-in-out ">
                <span className="mr-3 text-white font-medium">{label}</span>
                <div className="w-4 h-4">
                    <FaArrowRightLong className="w-6 h-4 text-white" />
                </div>
            </button>

            </div>
        
    )
}
