import { useState, useEffect } from "react";
import React from "react";

import SinglePost from "../SinglePost";
import "../../styles/Dashboard.css";

import Auth from "../../utils/auth";

export default function Dashboard() {
  const [allPosts, setAllPosts] = useState([]);
  let upvoteCount;

  async function getPosts() {
    const response = await fetch("/api/posts");
    const allPosts = await response.json();

    setAllPosts(allPosts.allPosts);
  };

  async function handlePostUpvote(postId) {
    const userProfile = Auth.getProfile();
    const userId = userProfile.data._id
    const response = await fetch(`/api/posts/upvotes/${postId}/${userId}`, {
      method: 'PUT',
    });
    const upvotedPostData = await response.json();
    console.log(upvotedPostData)
  };

  useEffect(() => {
    getPosts();
  }, []);



  return (
    <div className="container-fluid" id="dashboard">
      <h1>Dashboard</h1>
      <SinglePost allPosts={allPosts} handlePostUpvote={handlePostUpvote} upvoteCount={upvoteCount} />
    </div>
  );
}
