import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomePage from '../pages/Home';
import AboutPage from '../pages/About';
import ProjectsPage from '../pages/Projects';
import ProjectDetails from '../pages/ProjectDetails';
import ContactPage from '../pages/Contact';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/projetos" element={<ProjectsPage />} />
            <Route path="/projetos/:id" element={<ProjectDetails />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

// Página 404
function NotFound() {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-6xl font-bold text-purple-900 mb-4">404</h1>
      <p className="text-2xl text-purple-200 mb-8">Página não encontrada</p>
      <a href="/" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
        Voltar para Home
      </a>
    </div>
  );
}