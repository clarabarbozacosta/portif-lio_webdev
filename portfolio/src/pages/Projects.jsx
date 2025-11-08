import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectData';

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
  const filteredProjects = projectsData.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleProjectClick = (project) => {
    navigate(`/projetos/${project.id}`);
  };

  return (
    <div className="container mx-auto px-4 py-12">
  <h2 className="text-4xl font-bold mb-8 text-purple-900">Meus Projetos</h2>
      
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={handleProjectClick} 
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-2xl text-purple-500">Nenhum projeto localizado</p>
        </div>
      )}
    </div>
  );
}