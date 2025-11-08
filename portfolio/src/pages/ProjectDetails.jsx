import { useParams, useNavigate } from 'react-router-dom';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projectsData } from '../data/projectData';

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projectsData.find(p => p.id === parseInt(id));
  
  if (!project) {
    return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h2 className="text-4xl font-bold text-purple-900 mb-4">Projeto não encontrado</h2>
        <button 
          onClick={() => navigate('/projetos')} 
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
        >
          Voltar aos projetos
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <button 
        onClick={() => navigate('/projetos')} 
        className="mb-6 text-purple-600 hover:text-purple-800 font-semibold"
      >
        ← Voltar aos projetos
      </button>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-96 object-cover" />
        <div className="p-8">
          <h2 className="text-4xl font-bold mb-4 text-purple-900">{project.title}</h2>
          <p className="text-gray-700 mb-6 text-lg">{project.description}</p>
          
          <h3 className="text-2xl font-semibold mb-3 text-purple-900">Tecnologias Utilizadas</h3>
          <div className="flex flex-wrap gap-3 mb-6">
            {project.technologies.map(tech => (
              <span 
                key={tech} 
                className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center bg-purple-800 text-white px-6 py-3 rounded-lg hover:bg-purple-900 transition"
            >
              <FiGithub className="w-5 h-5 mr-2" /> Ver no GitHub
            </a>
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
            >
              <FiExternalLink className="w-5 h-5 mr-2" /> Demo ao Vivo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}