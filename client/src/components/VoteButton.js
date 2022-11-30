import { useState, useEffect } from "react";
import React from "react";
import upvote from "../assets/upvote.png";
import downvote from "../assets/downvote.png";

const styles= {
  upvote: {
    border: "solid 2px #6EEB83",
    backgroundColor: "#27272C",
    height: "30px",
    width: "30px",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    padding: "5px",
    marginTop: "10px",
    backgroundImage: upvote,
    borderRadius: ".375rem"
},

downvote: {
  border: "solid 2px #6EEB83",
  backgroundColor: "#27272C",
  height: "30px",
  width: "30px",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  padding: "5px",
  marginTop: "10px",
  backgroundImage: downvote,
  borderRadius: ".375rem"
},
}

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
      return <button id="upvote" style={styles.upvote} onClick={() => handlePostDownvote()}></button>
    }
    return <button id="downvote" style={styles.upvote} onClick={() => handlePostUpvote()}></button>
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