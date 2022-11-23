import React from "react";
import "../../styles/Post.css";

import Auth from "../utils/auth";

export default function Post() {
  return (
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
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
