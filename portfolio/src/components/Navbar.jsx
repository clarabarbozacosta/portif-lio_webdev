import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiUser, FiBriefcase, FiMail } from 'react-icons/fi';

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
  return (
  <nav className="bg-purple-800 text-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold hover:text-purple-400 transition">
            Clara Barboza Costa
          </Link>
          <div className="flex space-x-6">
            <Link 
              to="/" 
              className={`flex items-center hover:text-purple-400 transition ${isActive('/') ? 'text-purple-400' : ''}`}
            >
              <FiHome className="w-4 h-4 mr-1" /> Início
            </Link>
            <Link 
              to="/sobre" 
              className={`flex items-center hover:text-purple-400 transition ${isActive('/sobre') ? 'text-purple-400' : ''}`}
            >
              <FiUser className="w-4 h-4 mr-1" /> Sobre
            </Link>
            <Link 
              to="/projetos" 
              className={`flex items-center hover:text-purple-400 transition ${isActive('/projetos') || location.pathname.startsWith('/projetos/') ? 'text-purple-400' : ''}`}
            >
              <FiBriefcase className="w-4 h-4 mr-1" /> Projetos
            </Link>
            <Link 
              to="/contato" 
              className={`flex items-center hover:text-purple-400 transition ${isActive('/contato') ? 'text-purple-400' : ''}`}
            >
              <FiMail className="w-4 h-4 mr-1" /> Contato
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}