import { useState, useEffect } from "react";
import React from "react";
import VoteButton from "./VoteButton"

export default function Post({thisPost, userId}) {
    const [upvoteCountState, setUpvoteCountState] = useState(0)

    useEffect(() => {
        setUpvoteCountState(thisPost.upvotes.length - thisPost.downvotes.length)
    }, []);
return (
        <div key={thisPost._id} className="post">
      <h3>
        {thisPost.title} with {upvoteCountState} upvotes!
      </h3>
      <code>{thisPost.content}</code> <br />
      <VoteButton userId={userId} postId={thisPost._id} setUpvoteCountState={setUpvoteCountState} />
      </div>
)
}