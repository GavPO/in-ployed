import React, { useState, useEffect } from "react";
import "../../styles/Profile.css";
import email from "../../assets/email.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import Auth from "../../utils/auth";

function Mailto({ email,  ...props }) {
  return (
    <a href={`mailto:${email}`}>
      {props.children}
    </a>
  );
}

export default function Profile() {
  const [singleUser, setSingleUser] = useState([]);
  const [userID, setUserID] = useState([]);

  async function getUser() {
    const tokenData = Auth.getProfile();
    const userInfo = tokenData.data._id;
    setUserID(userInfo);
    const response = await fetch(`/api/users/${userID}`);
    const singleUser = await response.json();

    setSingleUser(singleUser);
  }
  useEffect(() => {
    getUser();
  });

  return (
    <div className="container-fluid" id="profile">
      <div className="row">
        <div className="col-lg-12">
          <h1>{singleUser.username}</h1>
          <p>
          {singleUser.description}
          </p>
          <h1>Contact:</h1>
          <div id="contact">
            <a href={singleUser.github} target="_blank">
              <img alt="Github logo" className="icon" src={github} />
            </a>
            <a href={singleUser.linkedin} target="_blank">
              <img alt="Linkedin logo" className="icon" src={linkedin} />
            </a>
            <Mailto email={singleUser.email}>
            <img alt="Email envelope" className="icon" src={email} />
            </Mailto>
          </div>
        </div>
      </div>
    </div>
  );
}
