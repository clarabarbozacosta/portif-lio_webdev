export default function ProjectCard({ project, onClick }) {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer" 
      onClick={() => onClick(project)}
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-purple-900">{project.title}</h3>
        <p className="text-purple-600 mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map(tech => (
            <span 
              key={tech} 
              className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}