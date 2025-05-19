import { motion } from "framer-motion"
export const ExperienceCard = ({data}) => {
    return (
        <motion.div 
        initial={{ opacity: 0, y:20 }}
        animate={{ opacity: 1, y:0 }}
        transition={{ duration: 0.5 }}
        className=" p-4 rounded-xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-bold">
                   Property: {data.property}
            </h2>
            <p className="text-gray-700">
                <strong>Role: </strong>{data.role} <br />
                <strong>Location: </strong>{data.location} <br />
                <strong>Duration: </strong>{data.duration}
            </p>
            <p className=" text-gray-500 italic mb-3"> Type: {data.propertyType}</p>
            <div>
                <p className="text-lg font-semibold text-blue-800 mb-1 ">Projects</p>
                {
                    data.projects && data.projects.map((project) => {
                        return (
                            <div
                            key={project.id} 
                            className="mt-4 border-t pt-2 border-gray-300 bg-blue-50 rounded-md p-2 hover:scale-105 transition-transform duration-300 shadow-lg">
                                <h3 className="text-lg font-medium">{project.title}</h3>
                                <p className="text-gray-700 text-sm">{project.overview}</p>
                                <p className="text-gray-500 text-xs mt-1">{project.launchDate}</p>
                                {
                                    project.tools?.length > 0 && (
                                        <p className="text-gray-500 text-xs">Tools: {project.tools.join(", ")}</p>

                                    )
                                }
                                {
                                    project.metrics && (
                                        <p className="text-gray-500 text-xs">Score:{project.metrics.satisfactionScore} </p>
                                    )
                                }
                            </div>
                        )
                    })
                }
            </div>
        </motion.div>
    )
}