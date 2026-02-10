import { projects } from "../data/projects";
import ProjectList from "../components/ProjectList";

function ProjectListPage() {
  return (
    <div>
      <ProjectList projects={projects} />
    </div>
  );
}

export default ProjectListPage;

