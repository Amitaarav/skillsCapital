import { FaArrowRightLong } from "react-icons/fa6";
export const SecondaryBlackButton = ({label}) => {
    return (
        <div>
            <button className="bg-gray-700 border-gray-300 border rounded-full px-4 py-2 text-white flex items-center hover:bg-gray-800 hover:font-bold hover:transform hover:scale-105 hover:transition hover:duration-300 hover:ease-in-out  cursor-pointer">
                <span className="mr-3 text-white font-medium">{label}</span>
                <div className="w-4 h-4">
                    <FaArrowRightLong className="w-6 h-4 text-white" />
                </div>
            </button>
        </div>
    )
}