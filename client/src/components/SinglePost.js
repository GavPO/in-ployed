import React from "react";

import Post from "./Post";

export default function SinglePost({
  allPosts,
  userId,
}) {


return(
  allPosts.map((post) => (
    <div key={post._id}>
      <Post userId={userId} thisPost={post}/>
      </div>
  ))
)
}
