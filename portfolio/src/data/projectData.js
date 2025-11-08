import dataPipelineImg from '../assets/data-pipeline.svg';
import edaImg from '../assets/eda.svg';
import nlpImg from '../assets/nlp-model.svg';
import dashboardImg from '../assets/dashboard.svg';
import recommenderImg from '../assets/recommender.svg';

export const projectsData = [
  {
    id: 1,
    title: "Data Pipeline com Airflow",
    description: "Implementação de pipeline ETL usando Apache Airflow para ingestion, transformação e carregamento de dados em um data lake.",
    technologies: ["Python", "Airflow", "Pandas", "AWS S3"],
  image: dataPipelineImg,
    github: "https://github.com/seu-usuario/data-pipeline-airflow",
    demo: ""
  },
  {
    id: 2,
    title: "Análise Exploratório de Dados (EDA)",
    description: "Projeto de EDA em Python aplicando limpeza, visualização e insights a um conjunto de dados real usando Pandas e Matplotlib/Seaborn.",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
  image: edaImg,
    github: "https://github.com/seu-usuario/eda-project",
    demo: ""
  },
  {
    id: 3,
    title: "Modelo de Classificação (NLP)",
    description: "Classificador de sentimento usando técnicas de NLP com scikit-learn e transformers; pipeline de pré-processamento e avaliação.",
    technologies: ["Python", "scikit-learn", "NLTK", "Transformers"],
  image: nlpImg,
    github: "https://github.com/seu-usuario/nlp-sentiment",
    demo: ""
  },
  {
    id: 4,
    title: "Dashboard de Visualização de Dados",
    description: "Dashboard interativo para visualização de métricas e KPIs com Plotly Dash, filtros e exportação de relatórios.",
    technologies: ["Python", "Plotly Dash", "Pandas"],
  image: dashboardImg,
    github: "https://github.com/seu-usuario/data-dashboard",
    demo: ""
  },
  {
    id: 5,
    title: "Sistema de Recomendação",
    description: "Implementação de um motor de recomendação híbrido (colaborativo + conteúdo) para produtos/itens usando Python.",
    technologies: ["Python", "scikit-learn", "Surprise", "Pandas"],
  image: recommenderImg,
    github: "https://github.com/seu-usuario/recommender-system",
    demo: ""
  }
];