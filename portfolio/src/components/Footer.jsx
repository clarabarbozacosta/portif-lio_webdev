import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
  <footer className="bg-purple-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <a 
              href="https://github.com/clarabarbozacosta" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-purple-400 transition"
            >
              <FiGithub className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/clara-barboza-costa-95bab534a/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-purple-400 transition"
            >
              <FiLinkedin className="w-6 h-6" />
            </a>
            <a 
              href="costaclarabarboza@gmail.com" 
              className="hover:text-purple-400 transition"
            >
              <FiMail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-purple-200">© 2025 Clara Barboza Costa. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}