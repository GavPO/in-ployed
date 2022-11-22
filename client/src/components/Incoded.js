import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Footer from './Footer'
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Post from './pages/Post';

export default function Incoded() {
  const [currentPage, setCurrentPage] = useState('Homepage');


  const renderPage = () => {
    if (currentPage === 'Homepage') {
      return <Homepage />;
    }
    if (currentPage === 'Login') {
      return <Login />;
    }
    if (currentPage === 'Dashboard') {
      return <Dashboard />;
    }
    if (currentPage === 'Profile') {
      return <Profile />;
    }
    if (currentPage === 'Post') {
      return <Post />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>
      {renderPage()}
      <Footer/>
    </div>
  );
}
