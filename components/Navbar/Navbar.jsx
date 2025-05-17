import { DropDownButton } from "@/utils/buttons/DropDownButton"
import { RightArrowButton } from "@/utils/buttons/RightArrowButton"
const navLabelItems = [
        "SAP Talent Cloud",
        "Enterprise Talent Cloud",
        "AI-Powered Vetting",
        "Tech Talent Solutions",
        "About Us"
    ]


export const Navbar = () => {
    return (
        <div className="w-full px-6 py-2 h-16 bg-white flex items-center justify-between">
            <div className="text-xl font-bold">SkillsCapital</div>
            <div className="flex gap-6 cursor-pointer">
                {navLabelItems.map((item) => (<DropDownButton key={item} label={item} className="hover:text-black hover:font-semibold cursor-pointer text-xl"/>))}
            </div>
            <RightArrowButton />
        </div>
    )
}