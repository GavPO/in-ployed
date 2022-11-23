import { useState, useEffect } from "react";
import React from "react";
import Post from "../Post";
import "../../styles/Dashboard.css";

import Auth from "../utils/auth";

export default function Dashboard() {
  const [allPosts, setAllPosts] = useState([]);

  async function getPosts() {
    const response = await fetch("/api/posts");
    const allPosts = await response.json();

    setAllPosts(allPosts);
  }
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container-fluid" id="dashboard">
      <h1>Dashboard</h1>
      <Post allPosts={allPosts} />
    </div>
  );
}
