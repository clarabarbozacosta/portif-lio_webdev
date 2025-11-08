import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nome: ${formData.name}\nEmail: ${formData.email}\nMensagem: ${formData.message}`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-12">
  <h2 className="text-4xl font-bold mb-8 text-purple-900">Entre em Contato</h2>
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="space-y-6">
          <div>
            <label className="block text-purple-900 font-semibold mb-2">Nome</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
              placeholder="Seu nome completo"
            />
          </div>
          <div>
            <label className="block text-purple-900 font-semibold mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
              placeholder="seu.email@exemplo.com"
            />
          </div>
          <div>
            <label className="block text-purple-900 font-semibold mb-2">Mensagem</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows="5"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
              placeholder="Sua mensagem..."
            />
          </div>
          <button 
            onClick={handleSubmit} 
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Enviar Mensagem
          </button>
        </div>
      </div>
    </div>
  );
}