import { ChevronDown } from 'lucide-react';

export const DropDownButton = ({label}) => {
    return (
        <button className="flex items-center space-x-1 text-sm font-medium text-gray-800 hover:text-black cursor-pointer hover:scale-105 transition-transform duration-200">
            <span>{label}</span>
            <ChevronDown className="w-4 h-4"/>
        </button>
    )
}