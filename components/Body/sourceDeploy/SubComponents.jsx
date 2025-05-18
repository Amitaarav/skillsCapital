import Image from "next/image";
import { SecondaryBlackButton } from "@/utils/buttons/SecondaryBlackButtons";
export const SubComponents = ({img, description,heading,label}) => {
    return (
        <div className="w-full sm:w-[300px] bg-white shadow overflow-hidden rounded-xl flex flex-col justify-center items-center transform transition-transform duration-300 ease-in-out hover:shadow-xl pb-2 mr-10">
                <div className="relative w-full h-48">
                    <Image
                    alt="Card image"
                    width={200}
                    height={300}
                    src={img}
                    className="w-full h-7/8 rounded-t-xl hover:scale-105 transition-transform duration-300 ease-in-out"
                    objectFit="cover"
                    />
                </div>
                <h1 className="text-black font-bold text-xl mb-2 text-center">{heading}</h1>
                <p className="text-gray-600 text-center mb-4">{description}</p>
                <div className="mt-auto">
                    <SecondaryBlackButton label={label}/>
                </div>  
        </div>
    );
};