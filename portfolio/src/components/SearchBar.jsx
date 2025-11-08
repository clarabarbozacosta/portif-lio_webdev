import { FiSearch } from 'react-icons/fi';

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="mb-8">
      <div className="relative max-w-md">
  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-300 w-5 h-5" />
        <input
          type="text"
          placeholder="Buscar projetos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
        />
      </div>
    </div>
  );
}