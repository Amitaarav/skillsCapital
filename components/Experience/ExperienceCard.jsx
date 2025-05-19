export const ExperienceCard = ({data}) => {
    return (
        <div className=" p-4 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold">
                    {data.property}
            </h2>
            <p className="text-gray-700">{data.role} - {data.location} ({data.duration})</p>
            <p className="text-gray-500 text-sm mb-2"> Type: {data.propertyType}</p>
            <div>
                {
                    data.projects.map((project) => {
                        return (
                            <div
                            key={data.projects.id} 
                            className="mt-4 border-t pt-2">
                                <h3 className="text-lg font-semibold">{project.title}</h3>
                                <p className="text-gray-700 text-sm">{project.overview}</p>
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