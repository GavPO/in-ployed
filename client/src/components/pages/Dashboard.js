import { useState, useEffect } from "react";
import React from "react";

import SinglePost from "../SinglePost";
import "../../styles/Dashboard.css";

import Auth from "../../utils/auth";


export default function Dashboard() {
  const [allPosts, setAllPosts] = useState([]);
  const userProfile = Auth.getProfile();
  const userId = userProfile.data._id

  async function getPosts() {
    const response = await fetch("/api/posts");
    const allPosts = await response.json();

    setAllPosts(allPosts.allPosts);
  };

  async function handlePostUpvote(postId) {

    const response = await fetch(`/api/posts/upvotes/${postId}/${userId}`, {
      method: 'PUT',
    });
    const upvotedPostData = await response.json();
    console.log(upvotedPostData)
  };

  async function handlePostDownvote(postId) {

    const response = await fetch(`/api/posts/upvotes/${postId}/${userId}`, {
      method: 'DELETE',
    });
    const upvotedPostData = await response.json();
    console.log(upvotedPostData)
  };

  async function isUpvoted(postId) {
    const response = await fetch(`/api/posts/upvotes/${postId}/${userId}`, {
      method: 'GET'
    })
    console.log(response)
    if (response.status === 200) return true;
    return false;
  }

  useEffect(() => {
    getPosts();
  }, []);



  return (
    <div className="container-fluid" id="dashboard">
      <h1>Dashboard</h1>
      <SinglePost allPosts={allPosts} handlePostUpvote={handlePostUpvote} handlePostDownvote={handlePostDownvote} isUpvoted={isUpvoted} />
    </div>
  );
}
