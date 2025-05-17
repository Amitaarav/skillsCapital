import { ArrowRight } from "lucide-react";
export const SimpleButton = () => {
    return (
        <div>
            <button className="flex items-center  px-4 py-2">
                <span className="mr-3 text-white font-semibold">Explore Talent Cloud</span>
                <div className="w-4 h-4">
                    <ArrowRight className="w-6 h-4 text-white" />
                </div>
            </button>
        </div>
    );
};