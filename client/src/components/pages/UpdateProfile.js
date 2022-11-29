import React from "react";
import "../../styles/Post.css";

async function profileForm() {
    
  // Get post title
const postTitle = document.getElementById('postTitle').value;
// Get post content
const postContent = document.getElementById('postContent').value;
// Make post to database so we can show it on the site
if (postTitle, postContent) {
  const response = await fetch('/api/posts', {
    method: 'PUT',
    body: JSON.stringify({
      title: postTitle,
      content: postContent
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    console.log('Post Posted');
  } else {
    alert(response.statusText);
  }
}
};

export default function UpdateProfile() {
  return (
    <div className="container-fluid" id="createPost">
      <h1>New Post</h1>
      <form>
        <div className="form-group">
          <h3>
            <label>Profile Description</label>
          </h3>
          <br />
          <textarea className="form-control" id="description" rows="3"></textarea>
        </div>
        <div className="form-group">
          <h3>
            <label>Linkedin Link</label>
          </h3>
          <br />
          <textarea className="form-control" id="linkedin" rows="1"></textarea>
        </div>
        <div className="form-group">
          <h3>
            <label>GitHub Link</label>
          </h3>
          <br />
          <textarea className="form-control" id="github" rows="1"></textarea>
        </div>
        <div className="form-group">
          <h3>
            <label>Email Link</label>
          </h3>
          <br />
          <textarea className="form-control" id="description" rows="1"></textarea>
        </div>
        <div className="form-group">

          <button onClick={() =>postForm()} className="btn" type="submit">

            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
