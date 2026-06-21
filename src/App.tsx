import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ProjectsList from "./pages/ProjectsList";
import ProjectDetail from "./pages/ProjectDetail";
import { useVisitTracker } from "./hooks/useVisitTracker";

export default function App() {
  useVisitTracker();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Home />} />
      <Route path="/manifesto" element={<Home />} />
      <Route path="/servicos" element={<Home />} />
      <Route path="/contato" element={<Home />} />
      <Route path="/projetos" element={<ProjectsList />} />
      <Route path="/projetos/:slug" element={<ProjectDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
