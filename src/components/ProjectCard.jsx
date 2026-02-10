import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  const {
    id,
    projectName,
    clientName,
    status,
    startDate,
    endDate,
  } = project;

  return (
    <div style={{ border: "1px solid #ccc", padding: "12px", marginBottom: "12px" }}>
      <h3>
        <Link to={`/projects/${id}`}>{projectName}</Link>
      </h3>
      <p><strong>Client:</strong> {clientName}</p>
      <p><strong>Status:</strong> {status}</p>
      <p>
        <strong>Duration:</strong> {startDate} – {endDate}
      </p>
    </div>
  );
}

export default ProjectCard;

