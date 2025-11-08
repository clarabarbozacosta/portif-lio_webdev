import profileImg from '../assets/sobre_foto.jpg';

export default function AboutPage() {
  const skills = ['Python', 'C', 'C++', 'JavaScript', 'SQL', 'HTML/CSS', 'Git', 'Docker'];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold mb-8 text-slate-800">Sobre Mim</h2>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <img 
              src={profileImg}
              alt="Foto de Clara Barboza Costa" 
              className="rounded-lg shadow-md w-full h-[640px] object-cover" 
              loading="lazy"
            />
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4 text-slate-800">Clara Barboza Costa</h3>
            <p className="text-gray-700 mb-4">
              Sou estudante de Engenharia de Software, atualmente no primeiro ano da FIAP, com grande interesse e dedicação ao
              desenvolvimento back-end, especialmente utilizando Python. Desde o início da minha formação, tenho buscado
              aprofundar meus conhecimentos em estruturas de dados, lógica de programação e arquitetura de sistemas, com o objetivo
              de construir soluções robustas, eficientes e escaláveis.
            </p>

            <p className="text-gray-700 mb-4">
              Concluí o curso <strong>CS50: Introduction to Computer Science</strong>, da Universidade Harvard, onde desenvolvi
              uma base sólida em algoritmos, programação em C, Python e SQL, além de projetos práticos que despertaram ainda mais
              meu interesse pelas camadas internas do desenvolvimento de software.
            </p>

            <p className="text-gray-700 mb-4">
              Tenho familiaridade com linguagens como C, C++, JavaScript, SQL e HTML/CSS, mas é no ecossistema Python que me sinto
              mais conectada, pela sua clareza, versatilidade e ampla aplicação em áreas como ciência de dados, aprendizado de
              máquina e inteligência artificial — campos que me motivam a explorar soluções inovadoras baseadas em dados.
            </p>

            <p className="text-gray-700 mb-4">
              Sou movida por desafios e pela busca constante de aprendizado. Valorizo boas práticas de codificação, versionamento com
              Git/GitHub e a construção de soluções que agreguem valor real. Estou em busca de uma oportunidade de estágio na área
              de back-end, onde eu possa contribuir com meu comprometimento técnico, mentalidade analítica e paixão por criar sistemas
              que façam a diferença.
            </p>

            <div className="mt-6">
              <h4 className="text-xl font-semibold mb-3 text-slate-800">Habilidades</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span 
                    key={skill} 
                    className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}