import { useState, useEffect } from "react";
import VoteButton from "./VoteButton"

export default function SinglePost({
  allPosts,
  handlePostUpvote,
  handlePostDownvote,
  isUpvoted,
}) {

  async function checkIsUpvoted(postId) {
    const response = await isUpvoted(postId);
    console.log(response, "<-- response")
    return response;
  }
return(
  allPosts.map((post) => (
    <div key={post._id} className="post">
      <h3>
        {post.title} with {post.upvotes.length} upvotes!
      </h3>
      <code>{post.content}</code> <br />
      <VoteButton checkIsUpvoted={checkIsUpvoted} postId={post._id} handlePostDownvote={handlePostDownvote} handlePostUpvote={handlePostUpvote}/>
    </div>
  ))
)
}
