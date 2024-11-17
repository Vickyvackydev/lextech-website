import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./features/homepage";
import AboutPage from "./features/aboutpage";
import Blog from "./features/blog";
import ContactPage from "./features/contact";
import ViewBlog from "./features/viewblog";

function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<Blog />} path="/blog" />
      <Route element={<ContactPage />} path="/contact" />
      <Route element={<ViewBlog />} path="/view" />
    </Routes>
  );
}

export default App;
