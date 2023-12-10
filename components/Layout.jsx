import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pl-6 pr-6 md:pl-12 md:pr-12 lg:pr-12 lg:pl-12 flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;