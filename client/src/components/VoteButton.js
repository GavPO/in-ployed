import { useState, useEffect } from "react";
import React from "react";

export default function VoteButton({
  checkIsUpvoted,
  postId,
  handlePostUpvote,
  handlePostDownvote,
}) {
  const [isUpvoted, setIsUpvoted] = useState(false);
  useEffect(() => {
    async function upvoteCheck() {
      let response = await checkIsUpvoted(postId);
      console.log(response , "<-- isUpdated response")
      setIsUpvoted(response);
    }
    upvoteCheck()
  }, []);
  return isUpvoted ? (
    <button onClick={() => handlePostDownvote(postId)}>DOWNVOTE</button>
  ) : (
    <button onClick={() => handlePostUpvote(postId)}>UPVOTE</button>
  );
}
