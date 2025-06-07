"use client"
import { useState } from "react"
import { DropDownButton } from "@/utils/buttons/DropDownButton"
import { RightArrowButton } from "@/utils/buttons/RightArrowButton"
import { Menu, X } from "lucide-react"
const navLabelItems = [
        "SAP Talent Cloud",
        "Enterprise Talent Cloud",
        "AI-Powered Vetting",
        "Tech Talent Solutions",
        "About Us"
    ]


export const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false)
    return (
        <div className="w-full px-6 bg-white flex items-center justify-between shadow-md gap-8 md:gap-2">
            <div className="text-md md:text-4xl font-bold md:ml-20">
                <button className=" flex items-baseline hover:cursor-pointer transition duration-300 ease-in-out bg-gradient-to-r from-red-500 to-gray-800 p-2.5 text-white rounded-lg m-2">
                    <div className="bg-gradient-to-r from-green-600 to-red-700 rounded-full p-2 border-2 border-amber-200">
                        <p className="text-xl sm:text-3xl font-extrabold">V</p>
                    </div>
                    <p>ettEdge</p>
                </button>
            </div>
            <div className="hidden md:flex gap-10 md:items-center md:justify-center">
                {navLabelItems.map((item) => (
                    <DropDownButton 
                       key={item} 
                       label={item} 
                       className="hover:text-black font-gray-900 text-base font-medium transition duration-200 ease-in-out"/>))}
                <RightArrowButton />
            </div>
            <div className="md:hidden">
                    <button
                    onClick={() => setIsOpen(!isOpen)}
                    >
                        {
                            isOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6" />
                        }
                    </button>
            </div>
            {
                isOpen && (
                    (
                        <div className="absolute top-16 left-0 w-full bg-white shadow-md  items-start px-6 py-4 gap-4 flex flex-col md:hidden z-50">
                            {navLabelItems.map((item) => (
                                <DropDownButton 
                                   key={item} 
                                   label={item} 
                                   className="hover:text-black font-gray-900 text-base cursor-pointer font-medium transition duration-200 ease-in-out"/>))}
                            <RightArrowButton />
                        </div>
                    )
                )
            }
        </div>
    )
}