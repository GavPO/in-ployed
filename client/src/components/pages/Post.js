import React from "react";
import "../../styles/Post.css";

// import Auth from "../../utils/auth";

async function postForm() {
    
  // Get post title
const postTitle = document.getElementById('postTitle').value;
// Get post content
const postContent = document.getElementById('postContent').value;
// Make post to database so we can show it on the site
if (postTitle, postContent) {
  const response = await fetch('/api/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: postTitle,
      content: postContent
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    console.log('Comment Posted');
  } else {
    alert(response.statusText);
  }
}
};

export default function Post() {
  return(
    <div className="container-fluid" id="createPost">
      <h1>New Post</h1>
      <form>
        <div className="form-group">
          <h3>
            <label htmlFor="code">Post Title:</label>
          </h3>
          <br />
          <textarea className="form-control" id="postTitle" rows="1"></textarea>
        </div>
        <div className="form-group">
          <h3>
            <label htmlFor="code">Your Code:</label>
          </h3>
          <br />
          <textarea
            className="form-control"
            id="postContent"
            rows="3"
          ></textarea>
        </div>
        <div className="form-group">
          <button onClick={() =>postForm()} className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
