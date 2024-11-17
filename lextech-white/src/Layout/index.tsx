import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
