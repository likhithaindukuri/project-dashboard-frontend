import { PROJECT_STATUS } from "../types/project";

export const projects = [
  {
    id: "1",
    projectName: "Internal Analytics Dashboard",
    clientName: "Acme Corp",
    status: PROJECT_STATUS.ACTIVE,
    startDate: "2024-01-15",
    endDate: "2024-06-30",
    description: "Dashboard for internal analytics and reporting.",
  },
  {
    id: "2",
    projectName:
      "Customer Relationship Management System with Extended Naming to Test Long Text Handling in UI",
    clientName: "Globex Corporation",
    status: PROJECT_STATUS.ON_HOLD,
    startDate: "2023-10-01",
    endDate: "2024-03-15",
    description:
      "CRM system to manage customer interactions and sales pipeline.",
  },
  {
    id: "3",
    projectName: "Website Redesign",
    clientName: "Soylent Corp",
    status: PROJECT_STATUS.COMPLETED,
    startDate: "2023-02-01",
    endDate: "2023-08-01",
    // description intentionally missing (edge case)
  },
];

