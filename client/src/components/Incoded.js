import React, { useState, useEffect } from "react";
import NavTabs from "./NavTabs";
import Footer from "./Footer";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

export default function Incoded() {
  const [currentPage, setCurrentPage] = useState("Homepage");

  const renderPage = () => {
    if (currentPage === "Homepage") {
      return <Homepage />;
    }
    if (currentPage === "Login") {
      return <Login />;
    }
    if (currentPage === "Dashboard") {
      return <Dashboard />;
    }
    if (currentPage === "Profile") {
      return <Profile />;
    }
    if (currentPage === 'Post') {
      return <Post />;
    }
  };

  useEffect(() => {
    document.title = "IN-Coded";
  }, []);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
