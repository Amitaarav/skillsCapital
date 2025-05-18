import { SubComponents } from "./SubComponents";
const cardDetails = [
    {
        id:"1",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsuW2a2zzQfAYDEqh_vm3H4FFanemwgRoYeQ&s",
        heading: "SAP Consultants",
        description: "Pre-vetted, ready-to-deploy SAP talent for on-demand projects & implementations.",
        label:"Explore SAP Consultants"
    },
    {
        id:"2",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnp6bBb6j1bANpeHDIid2kFu2CYesOY7uAgA&s",
        heading: "Managed Teams",
        description: "Scalable, fully managed SAP teams for end-to-end project delivery.",
        label:"Browse Managed Teams"
    },
    {
        id:"3",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9_8grfnP9Em3vIFDHL2fXKuo6u1bYRw67Rg&s",
        heading: "SAP Consulting",
        description: "SAP consulting and integration solutions to accelerate transformation.",
        label:"Access Top SAP Consulting"
    },
    
];
export const MainComponents = () => {
    return (
        <div>
            <div className="flex justify-center items-center flex-col mt-8 ">
                <h1 className="text-4xl font-bold text-gray-700 ml-8">Source & Deploy SAP Expertise Seamlessly</h1>
                <p className="text-gray-600">Our AI-driven plateform powers three key engagement models.</p>
            </div>
            <div className="max-w-7xl mx-auto m-4 text-black grid grid-cols-1  md:grid-cols-3 gap-2 sm:gap-4">
                {cardDetails.map((item) => (<SubComponents key={item.id} img={item.img} heading={item.heading} label={item.label} description={item.description} />))}
            </div>
        </div>
    );
};