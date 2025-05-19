export const ExperienceCard = ({data}) => {
    return (
        <div className=" p-4 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold">
                   Property: {data.property}
            </h2>
            <p className="text-gray-700">Role: {data.role} <br /> Location: {data.location} <br /> Duration: ({data.duration})</p>
            <p className="text-gray-500 mb-2"> Type: {data.propertyType}</p>
            <div>
                <p className="text-gray-500 text-lg">Projects</p>
                {
                    data.projects && data.projects.map((project) => {
                        return (
                            <div
                            key={project.id} 
                            className="mt-4 border-t pt-2">
                                <h3 className="text-lg font-semibold">Title:{project.title}</h3>
                                <p className="text-gray-700 text-sm">Overview:{project.overview}</p>
                                <p className="text-gray-500 text-sm">Launch: {project.launchDate}</p>
                                {
                                    project.tools?.length > 0 && (
                                        <p className="text-gray-500 text-sm">Tools: {project.tools.join(", ")}</p>

                                    )
                                }
                                {
                                    project.metrics && (
                                        <p className="text-gray-500 text-sm">Score:{project.metrics.satisfactionScore} </p>
                                    )
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}