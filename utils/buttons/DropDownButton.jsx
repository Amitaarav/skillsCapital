import { ChevronDown } from 'lucide-react';

export const DropDownButton = ({label}) => {
    return (
        <button className="flex items-center space-x-1 text-sm font-medium text-gray-800 hover:text-black">
            <span>{label}</span>
            <ChevronDown className="w-4 h-4"/>
        </button>
    )
}