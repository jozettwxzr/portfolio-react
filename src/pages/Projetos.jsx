import ProjectCard from "../components/ProjectCard";

function Projetos() {
  return (
    <main>
      <h2>Meus Projetos</h2>

      <ProjectCard
        nome="Calculadora"
        descricao="Projeto feito com JavaScript"
      />

      <ProjectCard
        nome="Lista de tarefas"
        descricao="Aplicação simples de tarefas"
      />

      <ProjectCard
        nome="Portfólio"
        descricao="Site de portfólio em React"
      />

    </main>
  );
}

export default Projetos;