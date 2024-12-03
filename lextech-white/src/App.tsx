import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./features/homepage";
import AboutPage from "./features/aboutpage";
import Blog from "./features/blog";
import ContactPage from "./features/contact";
import ViewBlog from "./features/viewblog";
import LegalTechServices from "./features/legalTechServices";
import ManagementConsulting from "./features/managementConsulting";
import Icase from "./features/legalTechServices/icase/index.";
import Verbatim from "./features/legalTechServices/verbatim";
import Search from "./features/legalTechServices/research";
import TechConsult from "./features/managementConsulting/TechConsulting";
import StrategyConsult from "./features/managementConsulting/StrategyConsult";
import ProjectManagement from "./features/managementConsulting/ProjectManagement";
import ChangeManagement from "./features/managementConsulting/ChangeManagement";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<Blog />} path="/blog" />
        <Route element={<ContactPage />} path="/contact" />
        <Route element={<ViewBlog />} path="/view" />
        <Route element={<LegalTechServices />} path="/legal-tech-services" />
        <Route
          element={<ManagementConsulting />}
          path="/management-consulting"
        />
        <Route element={<Icase />} path="/Icaseflow" />
        <Route element={<Verbatim />} path="/Verbatim-research-academy" />
        <Route element={<Search />} path="/Legal-search-solution" />
        <Route element={<TechConsult />} path="/Tech-Consulting" />
        <Route element={<StrategyConsult />} path="/Strategy-Consulting" />
        <Route element={<ProjectManagement />} path="/Project-Management" />
        <Route element={<ChangeManagement />} path="/Change-Management" />
      </Routes>
      <Toaster position="top-right" />
    </>
  );
}

export default App;
