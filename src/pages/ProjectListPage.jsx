import { useMemo, useState } from "react";
import { projects } from "../data/projects";
import ProjectList from "../components/ProjectList";
import Filters from "../components/Filters";

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

      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default ProjectListPage;

