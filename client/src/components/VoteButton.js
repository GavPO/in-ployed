import { useState, useEffect } from "react";
import React from "react";

// import Auth from "../utils/auth";

export default function VoteButton({ postId, userId }) {
  const [isUpvotedState, setIsUpvotedState] = useState()

  async function isUpvoted() {
    const response = await fetch(`/api/posts/upvotes/${postId}/${userId}`, {
      method: "GET",
    });
    if (response.status === 200) {
      return true;
    };
    return false;
  }

  async function getUpvoteCount() {
    const response = await fetch(`/api/posts/${postId}`, {
      method: "GET",
    });
    const postData = await response.json()
    return postData;
  }

  async function handlePostUpvote() {
    const response = await fetch(`/api/posts/upvotes/${postId}/${userId}`, {
      method: "PUT",
    });
    const upvotedPostData = await response.json();
    console.log(upvotedPostData);
    console.log(await getUpvoteCount())
    setIsUpvotedState(response.ok);
  }

  async function handlePostDownvote() {
    const response = await fetch(`/api/posts/upvotes/${postId}/${userId}`, {
      method: "DELETE",
    });
    const upvotedPostData = await response.json();
    console.log(upvotedPostData);
    console.log(await getUpvoteCount())
    setIsUpvotedState(false);
  }
  function returnButton() {
    if (isUpvotedState) {
      return <button onClick={() => handlePostDownvote()}>DOWNVOTE</button>
    }
    return <button onClick={() => handlePostUpvote()}>UPVOTE</button>
  }

  useEffect(() => {
    async function handleUpvoteData() {
      console.log(await getUpvoteCount(), "<-- useEffect log")
      console.log(await isUpvoted(), "<-- isUpvoted hit")
      const isUpvotedData = await isUpvoted()
      setIsUpvotedState(isUpvotedData)
    }
    handleUpvoteData();
  });

  return returnButton()
  

}