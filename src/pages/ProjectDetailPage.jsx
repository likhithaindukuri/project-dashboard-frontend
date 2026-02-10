import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectDetailPage() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div>
        <p>Project not found.</p>
        <Link to="/">← Back to Project List</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>{project.projectName}</h2>

      <p><strong>Client:</strong> {project.clientName}</p>
      <p><strong>Status:</strong> {project.status}</p>
      <p><strong>Start Date:</strong> {project.startDate}</p>
      <p><strong>End Date:</strong> {project.endDate}</p>

      <p>
        <strong>Description:</strong>{" "}
        {project.description || "No description provided."}
      </p>

      <br />
      <Link to="/">← Back to Project List</Link>
    </div>
  );
}

export default ProjectDetailPage;

