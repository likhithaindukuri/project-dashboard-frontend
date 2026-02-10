function ProjectList({ projects }) {
  if (!projects) {
    return <p>Unable to load projects.</p>;
  }

  if (projects.length === 0) {
    return <p>No projects match your filters.</p>;
  }

  return (
    <div>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

import ProjectCard from "./ProjectCard";
export default ProjectList;

