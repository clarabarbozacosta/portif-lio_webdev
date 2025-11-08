import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
  <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center text-white px-4">
  <h1 className="text-6xl font-bold mb-4">Olá, eu sou Clara Barboza Costa</h1>
  <p className="text-2xl mb-8 text-purple-200">Estudante de Engenharia de Software — Foco em Dados (Python)</p>
        <div className="flex justify-center space-x-4">
          <Link 
            to="/projetos" 
            className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg font-semibold transition"
          >
            Ver Projetos
          </Link>
          <Link 
            to="/contato" 
            className="bg-transparent border-2 border-white hover:bg-white hover:text-purple-900 px-8 py-3 rounded-lg font-semibold transition"
          >
            Entre em Contato
          </Link>
        </div>
      </div>
    </div>
  );
}