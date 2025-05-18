import { PrimaryYellowButton } from "@/utils/buttons/PrimaryYellowButton";
import { SimpleButton } from "@/utils/buttons/SimpleButton";
import Image from "next/image";
export const ReinforceComponent = () => {
    return (
        <div className="relative bg-blue-950 flex flex-col justify-between items-center p-4">
            <div className="absolute inset-0 z-0  w-full h-full bg-gradient-to-b from-gray-900 to-gray-600">
                                <Image
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTirjwVzUGsyxyFqszw1e-5oiSlQ_Dsqz-X3A&s"
                                    alt="reinforce Background"
                                    layout="fill"
                                    className="z-0 w-full h-auto object-cover"
                                />
            </div>
            <div className="relative z-10 max-w-6xl max-auto text-left sm:px-6 lg:px-8 mt-16 flex flex-col justify-center items-center gap-2 mb-8">
                <h1 className="text-white font-bold text-3xl text-center">Reinforce Value</h1>
                < p className="text-sm font-medium text-gray-200 ml-4">AI-Powered SAP Talent Cloud - instant, Pre-Vetted, Guaranteed</p>
            </div>
            <div className="relative flex justify-left  gap-20">
                            <PrimaryYellowButton label="Find SAP Experts Now" />
                            <SimpleButton label={"Join Our Talent Pool"}/>
            </div>
        </div>
    )
}