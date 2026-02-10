import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  if (!projects || projects.length === 0) {
    return <p>No projects available.</p>;
  }

  return (
    <div>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;

