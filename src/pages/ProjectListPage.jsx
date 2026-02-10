import { useMemo, useState } from "react";
import Filters from "../components/Filters";
import ProjectList from "../components/ProjectList";
import { projects } from "../data/projects";

function ProjectListPage() {
  const [searchText, setSearchText] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.projectName
          .toLowerCase()
          .includes(searchText.toLowerCase()) ||
        project.clientName
          .toLowerCase()
          .includes(searchText.toLowerCase());

      const matchesStatus = selectedStatus
        ? project.status === selectedStatus
        : true;

      return matchesSearch && matchesStatus;
    });
  }, [searchText, selectedStatus]);

  return (
    <div>
      <Filters
        searchText={searchText}
        onSearchChange={setSearchText}
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
      />

      <p style={{ marginBottom: "4px", color: "#555" }}>
        Click on a project to view detailed information.
      </p>

      <p style={{ marginBottom: "16px", color: "#777", fontSize: "14px" }}>
        Showing {filteredProjects.length} of {projects.length} projects
      </p>

      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default ProjectListPage;

