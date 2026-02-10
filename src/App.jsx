import { Route, Routes } from "react-router-dom";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ProjectListPage from "./pages/ProjectListPage";

function App() {
  return (
    <div style={{ padding: "16px", maxWidth: "880px", margin: "0 auto" }}>
      <h1>Project Dashboard</h1>

      <Routes>
        <Route path="/" element={<ProjectListPage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
