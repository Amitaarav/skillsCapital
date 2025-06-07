import { ArrowRight } from "lucide-react"; // or ArrowRightIcon if needed
import { motion } from "framer-motion";

export const RightArrowButton = () => {
  return (
    <div className="flex items-center">
      <button
        className="flex items-center bg-white border-gray-300 border rounded-full px-4 py-2 hover:cursor-pointer m-4 transtion-transform duration-200"
      >
        <span className="mr-2 text-sm md:text-base text-black font-semibold">Find Talent</span>
        <div className="bg-yellow-500 rounded-full p-2">
          <ArrowRight className="w-4 h-4 text-black" />
        </div>
      </button>
    </div>
  );
};
