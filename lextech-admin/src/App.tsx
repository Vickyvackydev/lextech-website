import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./features/homepage";
import AboutPage from "./features/aboutpage";
import ContactPage from "./features/contactpage";
import BlogPosts from "./features/blogpage";
import Preloader from "./ui/preloader";
import AddBlog from "./features/add-post";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
        <Routes>
       {/* Your App Components */}
   
      <Route element={preloader ? <Preloader /> : <HomePage />} path="/" />
      <Route element={<ContactPage />} path="/contact" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<BlogPosts />} path="/blog" />
      <Route element={<HomePage />} path="/settings" />
      <Route element={<HomePage />} path="/faq" />
      <Route element={<AddBlog />} path="/add-post" />
    </Routes>
    </>
  
  );
}

export default App;
