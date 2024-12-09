import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./features/homepage";
import AboutPage from "./features/aboutpage";
import ContactPage from "./features/contactpage";
import BlogPosts from "./features/blogpage";
import Preloader from "./ui/preloader";
import AddBlog from "./features/add-post";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./features/login";
import { useSelector } from "react-redux";
import { selectToken } from "./state/slices/authReducer";
import PrivateRoute from "./privateroute";
import EditBlog from "./features/edit-post";

function App() {
  const [preloader, setPreloader] = useState(true);
  const token = useSelector(selectToken);
  const location = useLocation();

  useEffect(() => {
    const loader = setTimeout(() => {
      setPreloader(false);
    }, 3000);

    return () => clearTimeout(loader);
  }, []);

  if (token === null)
    return <Navigate replace state={{ from: location }} to={"/"} />;
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
      <PrivateRoute>
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
      </PrivateRoute>
    </>
  );
}

export default App;
