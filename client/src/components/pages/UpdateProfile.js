import React from "react";
import "../../styles/Post.css";

import Auth from "../../utils/auth.js";

async function postForm() {
  const userProfile = Auth.getProfile();
    
// Get profile description
const profileDescription = document.getElementById('profileDescription').value;
// Get linkden
const profileLinkden = document.getElementById('linkedin').value;
// Get github
const profileGithub = document.getElementById('github').value;
// Make post to database so we can show it on the site
if (profileDescription, profileLinkden, profileGithub) {
  const response = await fetch(`/api/users/${userProfile.data._id}`, {
    method: 'PUT',
    body: JSON.stringify({
      description: profileDescription,
      linkedin: profileLinkden,
      github: profileGithub
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    console.log('Profile Updated');
  } else {
    alert(response.statusText);
  }
}
};

export default function UpdateProfile() {
  return (
    <div className="container-fluid" id="createPost">
      <h1>Update Your Profile</h1>
      <form>
        <div className="form-group">
          <h3>
            <label>Profile Description:</label>
          </h3>
          <br />
          <textarea className="form-control" id="profileDescription" rows="3"></textarea>
        </div>
        <div className="form-group">
          <h3><label>Linkedin Link</label></h3><br />
          <textarea className="form-control" id="linkedin" rows="1"></textarea>
        </div>
        <div className="form-group">
          <h3><label>GitHub Link</label></h3><br />
          <textarea className="form-control" id="github" rows="1"></textarea>
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
