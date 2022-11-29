import { useState, useEffect } from "react";
import React from "react";

import SinglePost from "../SinglePost";
import "../../styles/Dashboard.css";

// import Auth from "../../utils/auth";


export default function Dashboard() {
  const [allPosts, setAllPosts] = useState([]);
  const [upvoteCount, setUpvoteCount] = useState(0);

  async function getPosts() {
    const response = await fetch("/api/posts");
    const allPosts = await response.json();

    setAllPosts(allPosts);
  }
  useEffect(() => {
    getPosts();
  }, []);

  async function handlePostUpvote(event, postId) {
    event.preventDefault();
    const response = await fetch(`/api/posts/upvote/${postId}`, {
      method: 'PUT',
    });
    const singlePost = await response.json();
    console.log(singlePost)
  };

  return (
    <div className="container-fluid" id="dashboard">
      <h1>Dashboard</h1>
      <SinglePost allPosts={allPosts} handlePostUpvote={handlePostUpvote} upvoteCount={upvoteCount} />
    </div>
  );
}
