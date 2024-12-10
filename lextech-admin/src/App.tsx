import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./features/aboutpage";
import ContactPage from "./features/contactpage";
import BlogPosts from "./features/blogpage";
import Preloader from "./ui/preloader";
import AddBlog from "./features/add-post";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./features/login";

import EditBlog from "./features/edit-post";

function App() {
  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    const loader = setTimeout(() => {
      setPreloader(false);
    }, 3000);

    return () => clearTimeout(loader);
  }, []);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss
        rtl={false}
        draggable
        pauseOnHover
      />

      <Routes>
        {/* Your App Components */}
        <Route element={<Login />} path="/" />
        <Route
          element={preloader ? <Preloader /> : <ContactPage />}
          path="/contact"
        />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<BlogPosts />} path="/blog" />
        {/* <Route element={<HomePage />} path="/settings" /> */}
        {/* <Route element={<HomePage />} path="/faq" /> */}
        <Route element={<AddBlog />} path="/add-post" />
        <Route element={<EditBlog />} path="/edit-post" />
        {/* <Route element={<Login />} path="/login" /> */}
      </Routes>
    </>
  );
}

export default App;
