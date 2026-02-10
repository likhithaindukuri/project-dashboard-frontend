function ProjectCard({ project }) {
  const {
    projectName,
    clientName,
    status,
    startDate,
    endDate,
  } = project;

  return (
    <div style={{ border: "1px solid #ccc", padding: "12px", marginBottom: "12px" }}>
      <h3>{projectName}</h3>
      <p><strong>Client:</strong> {clientName}</p>
      <p><strong>Status:</strong> {status}</p>
      <p>
        <strong>Duration:</strong> {startDate} – {endDate}
      </p>
    </div>
  );
}

export default ProjectCard;

