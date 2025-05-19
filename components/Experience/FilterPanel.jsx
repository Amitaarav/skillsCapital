export const FilterPanel = ({filter, setFilter}) => {
    return (
        <div className="flex flex-col gap-4 mb-4 bg-gray-400 shadow-md rounded-lg p-4 w-full">
                <select name="property type" id=""
                    className="bg-white border-2 border-gray-300 text-gray-900 text-sm rounded-md focus:ring-2 focus:ring-blue-500 block w-full p-2.5 "
                    value={filter.propertyType} 
                    onChange={(e) => setFilter((filter)=>({...filter, propertyType: e.target.value}))}
                    >
                    <option value="All Property">All Property Type</option>
                    <option value="business">Business</option>
                    <option value="heritage">Heritage</option>
                    <option value="resort">Resort</option>
                    <option value="hotel">Hotel</option>
                    <option value="guesthouse">Guesthouse</option>
                    <option value="motel">Motel</option>
                </select>
                <select name="Year" id=""
                    className="bg-white border-2 border-gray-300 text-gray-900 text-sm rounded-md focus:ring-2 focus:ring-blue-500 block w-full p-2.5 "
                    value={filter.year} 
                    onChange={(e) => setFilter((filter)=>({...filter, year: e.target.value}))}
                    >
                    <option value="All Flagship">All Year</option>
                    <option value="2021">2022</option> 
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                </select>
                <select name="" id=""
                    className="bg-white border-2 border-gray-300 text-gray-900 text-sm rounded-md focus:ring-2 focus:ring-blue-500 block w-full p-2.5 "
                    value={filter.location} 
                    onChange={(e) => setFilter((filter)=>({...filter, location: e.target.value}))}
                    >
                    <option value="All Location">All Location Available</option>
                    <option value="Bali, Indonesia">Mumbai, India</option> 
                    <option value="Udaipur, India">Udaipur, India</option>
                    <option value="Bali, Indonesia">Bali, Indonesia</option>

                </select>
        </div>
    )
}