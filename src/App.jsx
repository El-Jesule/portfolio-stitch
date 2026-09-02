import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/templates/MainLayout/MainLayout.jsx";
import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { AboutPage } from "./pages/AboutPage/AboutPage.jsx";
import { EducationPage } from "./pages/EducationPage/EducationPage.jsx";
import { SkillsPage } from "./pages/SkillsPage/SkillsPage.jsx";
import { ProjectsPage } from "./pages/ProjectsPage/ProjectsPage.jsx";
import { ProjectDetailPage } from "./pages/ProjectDetailPage/ProjectDetailPage.jsx";
import { ContactPage } from "./pages/ContactPage/ContactPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
