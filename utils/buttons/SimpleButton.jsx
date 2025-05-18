import { FaArrowRightLong } from "react-icons/fa6";
export const SimpleButton = ({label}) => {
    return (
        <div>
            <button className="flex items-center px-4 py-2 hover:border-white hover:border  hover:rounded-full hover:scale-105 hover:transition hover:duration-300 hover:ease-in-out cursor-pointer">
                <span className="mr-3 text-gray-300 font-semibold">{label}</span>
                <div className="w-4 h-4">
                    <FaArrowRightLong className="w-6 h-4 text-white" />
                </div>
            </button>
        </div>
    );
};